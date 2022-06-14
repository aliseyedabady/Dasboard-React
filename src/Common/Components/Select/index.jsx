import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Select from "react-select";
import { useNesData } from "../../../Hooks/useNesData";

function SelectApi({ data, form, setForm }) {
  const { Get, get, setGet, loading } = useNesData({ getUrl: "/select/data" });
  useEffect(() => {
    Get({ needkey: data.options["key"] });
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
  console.log("data", data);
  return (
    <div key={data.key} className={`my-2 ${data.col}`}>
      <label htmlFor="">{data.name}</label>
      <Select
        placeholder={data.name}
        className="input-form "
        options={get && get[data.options["key"]]}
        onChange={({ value }) => {
          setForm({ ...form, [data.key]: value });
        }}
      />
    </div>
  );
}

export default SelectApi;
