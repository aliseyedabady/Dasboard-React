import React from "react";

function FormolInput({ element, form, setForm }) {
  return (
    <div key={element.key} className={`my-2 ${element.col}`}>
      <label>{element.name}</label>
      <textarea
        className="form-control input-form"
        onChange={({ target: { value } }) => {
          setForm({ ...form, [element.key]: value });
        }}
      ></textarea>
    </div>
  );
}

export default FormolInput;
