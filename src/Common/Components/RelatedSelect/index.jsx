import React, { useEffect } from "react";
import { useReleted } from "./hook";
import { Spinner } from "react-bootstrap";
import Select from "react-select";

function RelatedSelect({ element, form, setForm }) {
  const { Get, get, setGet, loading, getAData } = useReleted({
    getUrl: "/select/data",
  });
  useEffect(() => {
    Get(element.inint);
  }, []);
  if (loading.get) {
    return (
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
  }
  const renderRelated = () => {
    let result;
    element &&
      element.elements &&
      element.elements.map(select => {
        if (form[element.key] == select.child) {
          console.log("slaa");
          result = (
            <div key={select && select.key} className={`my-2  ${select.col} `}>
              <label htmlFor="">{select && select.name}</label>
              <Select
                placeholder={select && select.name}
                className="input-form "
                options={getAData({ key: [select.options.key[0]] })}
                onChange={({ value }) => {
                  setForm({ ...form, [select.key]: value });
                }}
              />
            </div>
          );
        }
      });
    return result;
  };
  return (
    <>
      <div
        key={element && element.own.key}
        className={`my-2  ${element.own.col} `}
      >
        <label htmlFor="">{element && element.own.name}</label>
        <Select
          placeholder={element && element.own.name}
          className="input-form "
          options={getAData({ key: "typeofservice" })}
          onChange={({ value }) => {
            setForm({ ...form, [element.key]: value });
          }}
        />
      </div>
      {renderRelated()}
    </>
  );
}

export default RelatedSelect;
