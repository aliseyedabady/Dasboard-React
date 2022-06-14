import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  const [form, setForm] = useState({});
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        title={"ثبت آیتم جریمه"}
        elements={{
          btnName: "ایجاد",
          url: "/faultitem/create",
          form: [
            {
              name: "عنوان",
              key: "title",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "واحد",
              key: "unit_id",
              type: "select",
              col: "col-md-3",
              options: {
                rote: "/select/data",
                key: ["units"],
              },
            },
            {
              name: "گروه خدمات",
              key: "serviceGroup_id",
              type: "select",
              col: "col-md-3",
              options: {
                rote: "/select/data",
                key: ["servicegroup"],
              },
            },
            {
              name: "وضعیت",
              key: "status",
              type: "select",
              col: "col-md-3",
              options: [
                {
                  label: "فعال",
                  value: "true",
                },
                {
                  label: "غیر فعال",
                  value: "false",
                },
              ],
            },
            {
              name: "ظریب انجام نشده",
              key: "cnd",
              type: "select",
              col: "col-md-3",
              options: [
                {
                  label: "1",
                  value: 1,
                },
                {
                  label: "2",
                  value: 2,
                },
                {
                  label: "4",
                  value: 4,
                },
              ],
            },

            {
              name: "تاریخ شروع",
              key: "start_date",
              type: "date",
              col: "col-md-3",
            },
            {
              name: "تاریخ پایان",
              key: "end_date",
              type: "date",
              col: "col-md-3",
            },
            {
              name: "فرمول",
              key: "formola",
              type: "formol",
              col: "col-md-3",
            },
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
