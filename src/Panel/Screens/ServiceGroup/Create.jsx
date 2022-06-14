import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        initial={{ function: "newroot" }}
        title={"ثبت گروه خدمات"}
        elements={{
          btnName: "ثبت",
          url: "/servicegroup/create",
          form: [
            {
              name: "عنوان",
              key: "title",
              type: "input",
              col: "col-md-3",
            },
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
