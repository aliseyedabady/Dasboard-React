import { Tab } from "bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../../../Common/Components/Table/index";
import Form from "../../../Common/Components/Form";
function List() {
  return (
    <div className="m-2">
      <div className="mb-2 d-flex justify-content-end">
        <Link
          to={"/Parametrs/create"}
          className="link btn btn-primary text-white"
        >
          ایجاد پارامتر
        </Link>
      </div>
      <Table
        deleteUrl="/parametr/update"
        keyDelete="id"
        route="/parametr/list"
        title={"پارامتر ها"}
        elements={[
          {
            name: "عنوان",
            key: "title",
          },
        ]}
        editComponent={({ data }) => {
          return (
            <Form
              initial={{ id: data.id, function: "edit" }}
              elements={{
                btnName: "ویرایش نقش",
                url: "/role/update",
                form: [
                  {
                    name: "عنوان نقش",
                    key: "title",
                    type: "input",
                    col: "col-md-3",
                    value: data.title,
                  },
                ],
              }}
            />
          );
        }}
      />
    </div>
  );
}

export default List;
