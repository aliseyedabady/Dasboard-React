import { Tab } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Table from "../../../Common/Components/Table/index";
function List() {
  return (
    <div className="m-2">
      <div className="mb-2 d-flex justify-content-end">
        <Link
          className="link btn btn-primary text-white"
          to={"/Employees/create"}
        >
          ایجاد کارمند
        </Link>
      </div>
      <Table
        operations={[
          { type: "delete", url: "/realperson/update", state: "" },
          {
            type: "show",
            to: "/Employee/edit",
          },
        ]}
        route="/realperson/list"
        title={"کارمندان"}
        elements={[
          {
            name: "نام",
            key: "fullname",
          },
          {
            name: "کد ملی",
            key: "national_code",
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
