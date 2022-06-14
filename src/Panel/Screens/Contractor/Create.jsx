import React, { Fragment, useState } from "react";
import BoxShadow from "../../../Common/Components/BoxShadow";
import Form from "../../../Common/Components/Form";
function Create() {
  return (
    <BoxShadow style={{ padding: "10px", marginTop: "20px" }}>
      <Form
        elements={{
          btnName: "ایجاد پیمان کار",
          url: "/legalperson/create",
          form: [
            {
              name: "نام مدیر عامل",
              key: "CEO_fullname",
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
              name: "کد ملی مدیر عامل",
              key: "CEO_national_code",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "نام شرکت",
              key: "companyname",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "کد ثبت شرکت",
              key: "company_reg_no",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "کد اقتصادی",
              key: "economic_code",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "ایمیل",
              key: "email",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "شماره فکس شرکت",
              key: "faxno",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "آدرس شرکت",
              key: "address",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "کدپستی شرکت",
              key: "postcode",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "شماره همراه",
              key: "mobile",
              type: "input",
              col: "col-md-3",
            },
            {
              name: "شماره ثابت",
              key: "phone",
              type: "input",
              col: "col-md-3",
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
              name: "عکس مدیر عامل",
              key: "image_profile",
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
            {
              name: "پیوست مدارک",
              key: "attached_doc",
              type: "file",
              col: "col-md-3",
            },
          ],
        }}
      />
    </BoxShadow>
  );
}

export default Create;
