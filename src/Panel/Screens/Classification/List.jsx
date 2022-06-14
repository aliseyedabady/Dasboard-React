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
          to={"/Classification/create"}
        >
          ایجاد طبقه بندی اضافات و کسورات
        </Link>
      </div>
      <Table
        operations={[
          { type: "delete", url: "/workergroup/update", state: "" },
          {
            type: "show",
            to: "/Employee/edit",
          },
        ]}
        route="/classification/list"
        title={"طبقه بندی اضافات و کسورات"}
        elements={[
          {
            name: "عنوان",
            key: "title",
          },
          {
            name: "نوع",
            key: "type",
            type: "enum",
            enum: {
              add: "افزایشی",
              sub: "کاهشی",
            },
          },
        ]}
      />
    </div>
  );
}

export default List;
