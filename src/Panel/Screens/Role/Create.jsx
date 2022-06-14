import React, { Fragment, useState } from "react";
import { Spinner } from "react-bootstrap";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
import { useSetForm } from "../../../Hooks/SetForm";
export const elements = {
  btnName: "ایجاد نقش",
  url: "/role/create",
  form: [
    {
      name: "عنوان نقش",
      key: "title",
      type: "input",
      col: "col-md-3",
    },
  ],
};
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form title={"ایجاد نقش"} elements={elements} />
    </BoxShadow>
  );
}

export default Create;
