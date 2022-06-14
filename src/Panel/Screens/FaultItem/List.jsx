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
          to={"/FaultItem/Create"}
        >
          ایجاد جرایم
        </Link>
      </div>
    </div>
  );
}

export default List;
