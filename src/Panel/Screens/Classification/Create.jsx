import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        title={"ثبت طبقه بندی اضافات و کسورات"}
        elements={{
          btnName: "ثبت",
          url: "/classification/create",
          form: [
            {
              name: "عنوان",
              key: "title",
              type: "input",
              col: "col-md-3",
            },

            {
              name: "نوع",
              key: "type",
              type: "select",
              col: "col-md-3",
              options: [
                {
                  label: "افزایشی",
                  value: "add",
                },
                {
                  label: "کاهشی",
                  value: "sub",
                },
              ],
            },
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
