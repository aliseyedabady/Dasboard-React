import React, { Fragment, useState } from "react";
import { Spinner } from "react-bootstrap";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
import { useSetForm } from "../../../Hooks/SetForm";
export const elements = {
  btnName: "ایجاد پارامتر",
  url: "/parametr/create",
  form: [
    {
      name: "عنوان پارامتر",
      key: "title",
      type: "input",
      col: "col-md-3",
    },
    {
      name: "واحد اندازه گیری",
      key: "unit_id",
      type: "select",
      col: "col-md-3",
      options: {
        rote: "/select/data",
        key: ["units"],
      },
    },
  ],
};
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form title={"ایجاد پارامتر"} elements={elements} />
    </BoxShadow>
  );
}

export default Create;
