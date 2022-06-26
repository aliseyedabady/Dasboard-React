import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        title={"ثبت کاربر"}
        elements={{
          btnName: "ایجاد کارمند",
          url: "/realperson/create",
          form: [
            {
              name: "نام",
              key: "fullname",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "نام کاربری",
              key: "username",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "رمز عبور",
              key: "password",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "کد ملی",
              key: "national_code",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "شماره شناسنامه",
              key: "nomber_bc",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "تلفن ثابت",
              key: "phone",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "تلفن همراه",
              key: "mobile",
              type: "input",
              col: "col-md-3",
            },

            {
              name: "نام پدر",
              key: "fathername",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "جنسیت",
              key: "gender",
              type: "select",
              col: "col-md-3",
              options: [
                {
                  label: "مرد",
                  value: "male",
                },
                {
                  label: "زن",
                  value: "female",
                },
              ],
            },
            {
              name: "نقش",
              key: "role_id",
              type: "select",
              col: "col-md-3",
              options: {
                rote: "/select/data",
                key: ["roles"],
              },
            },
            {
              name: "تاریخ انقضا نقش",
              key: "exproledate",
              type: "date",
              col: "col-md-3",
            },
            {
              name: "تاریخ تولد",
              key: "birthday",
              type: "date",
              col: "col-md-3",
            },
            {
              name: "عکس کارمند",
              key: "profile",
              type: "file",
              col: "col-md-3",
              maxFiles: 1,
            },
            {
              name: "نمونه امضا",
              key: "image_signature",
              type: "file",
              col: "col-md-3",
              maxFiles: 1,
            },
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
