import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        title={"ثبت گروه کارگران"}
        elements={{
          btnName: "ثبت",
          url: "/workergroup/create",
          form: [
            {
              name: "عنوان",
              key: "title",
              type: "input",
              col: "col-md-3",
            },

            {
              name: "گروه شغلی",
              key: "group_id",
              type: "select",
              col: "col-md-3",
              options: [
                {
                  label: "0",
                  value: "0",
                },
                {
                  label: "1",
                  value: "1",
                },
                {
                  label: "5",
                  value: "5",
                },
                {
                  label: "8",
                  value: "8",
                },
              ],
            },
            {
              name: " محل خدمت",
              key: "city_id",
              type: "select",
              col: "col-md-3",
              options: {
                rote: "/select/data",
                key: ["citys"],
              },
            },
            {
              name: "وضعیت محل خدمت",
              key: "status_id",
              type: "select",
              col: "col-md-3",
              options: {
                rote: "/select/data",
                key: ["workplacestatus"],
              },
            },
            // {
            //   name: "کارگر مازاد",
            //   key: "more_worker",
            //   type: "check",
            //   col: "col-md-3",
            //   noNeed: true,
            // },
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
