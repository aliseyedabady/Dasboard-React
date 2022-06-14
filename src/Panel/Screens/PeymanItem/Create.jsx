import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        title={"ثبت آیتم پیمان"}
        elements={{
          btnName: "ثبت",
          url: "/peymanitem/create",
          form: [
            {
              name: "عنوان",
              key: "title",
              type: "input",
              col: "col-md-3",
            },
            {
              type: "relation",
              inint: { needkey: ["typeofservice", "vehicle", "workergroup"] },
              key: "service_id",
              own: {
                name: "نوع خدمت",

                type: "select",
                col: "col-md-3",
                parent: true,
                options: {
                  rote: "/select/data",
                  key: ["typeofservice"],
                },
              },
              elements: [
                {
                  name: "نوع خودرو",
                  key: "city_id",
                  type: "select",
                  col: "col-md-3",
                  child: 2,
                  options: {
                    rote: "/select/data",
                    key: ["vehicle"],
                  },
                },
                {
                  name: "گروه کارگران",
                  key: "workergroup_id",
                  type: "select",
                  col: "col-md-3",
                  child: 3,
                  options: {
                    rote: "/select/data",
                    key: ["workergroup"],
                  },
                },
              ],
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
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
