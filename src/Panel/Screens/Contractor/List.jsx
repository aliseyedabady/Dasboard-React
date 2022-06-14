import { Tab } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Table from "../../../Common/Components/Table/index";
function List() {
  console.log("sa; ");
  return (
    <div className="m-2">
      <div className="mb-2 d-flex justify-content-end">
        <Link
          className="link btn btn-primary text-white"
          to={"/Contractors/create"}
        >
          ایجاد پیمان کار
        </Link>
      </div>
      <Table
        route="/legalperson/list"
        title={"پیمان کاران"}
        elements={[
          {
            name: "نام شرکت",
            key: "companyname",
          },
          {
            name: "نام مدیر عامل",
            key: "CEO_fullname",
          },
          {
            name: "کد ملی مدیر عامل",
            key: "CEO_national_code",
          },
          {
            name: "شماره همراه",
            key: "mobile",
          },
          {
            name: "نقش",
            key: "title",
            type: "nested",
          },
        ]}
      />
    </div>
  );
}

export default List;
