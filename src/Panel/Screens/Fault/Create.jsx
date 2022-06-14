import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        title={"ثبت  جرایم روزانه"}
        elements={{
          btnName: "ثبت",
          url: "/faultfone/create",
          form: [
            {
              name: "عنوان",
              key: "title",
              type: "input",
              col: "col-md-3",
            },

            {
              name: "پیمان کار",
              key: "legal_id",
              type: "select",
              col: "col-md-3",
              options: {
                rote: "/select/data",
                key: ["legal"],
              },
            },
            {
              name: "آیتم جریمه",
              key: "fault_id",
              type: "select",
              col: "col-md-3",
              options: {
                rote: "/select/data",
                key: ["faultitem"],
              },
            },
            {
              name: "روز",
              key: "date",
              type: "date",
              col: "col-md-3",
              noNeed: true,
            },
            {
              name: "ساعت",
              key: "time",
              type: "time",
              col: "col-md-3",
              noNeed: true,
            },
            {
              name: "آدرس",
              key: "address",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "مقدار جریمه",
              key: "value",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "توضیحات",
              key: "description",
              type: "textArea",
              col: "col-md-3",
            },
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
