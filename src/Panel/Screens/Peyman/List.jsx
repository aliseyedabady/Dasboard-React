import { Tab } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Table from "../../../Common/Components/Table/index";
function List() {
  return (
    <div className="m-2">
      <div className="mb-2 d-flex justify-content-end">
        <Link className="link btn btn-primary text-white" to={"/Peyman/create"}>
          ایجاد پیمان
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
        route="/workergroup/list"
        title={"پیمان ها"}
        elements={[
          {
            name: "عنوان",
            key: "title",
          },
          {
            name: "گروه شغلی",
            key: "group_id",
          },
          {
            name: "کارگر مازاد",
            key: "mobile",
          },
        ]}
      />
    </div>
  );
}

export default List;
