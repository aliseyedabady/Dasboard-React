import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        title={"ثبت پیمان"}
        elements={{
          btnName: "ثبت",
          url: "/peyman/create",
          form: [
            {
              name: "عنوان",
              key: "title",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "کد ",
              key: "code",
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
              type: "region",
              key: "area_id",
              name: "منطقه ، ناحیه",
            },
            {
              name: "تاریخ شروع پیمان",
              key: "start_date",
              type: "date",
              col: "col-md-3",
            },
            {
              name: "تاریخ پایان پیمان",
              key: "exp_date",
              type: "date",
              col: "col-md-3",
            },
            {
              name: "اعتبار",
              key: "credit",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "ظریب پیشنهادی",
              key: "proposedcoefficient",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "ظریب پیشنهادی",
              key: "peymanitems",
              type: "formTable",
              col: "col-md-3",
            },
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
