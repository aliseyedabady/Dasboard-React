import { Tab } from "bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../../../Common/Components/Table/index";
import Form from "../../../Common/Components/Form";
function List() {
  return (
    <div className="m-2">
      <div className="mb-2 d-flex justify-content-end">
        <Link to={"/roles/create"} className="link btn btn-primary text-white">
          ایجاد نقش
        </Link>
      </div>
      <Table
        operations={[
          { type: "delete", url: "/role/update", state: "" },
          {
            type: "edit",
            component: ({ data }) => {
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
            },
          },
        ]}
        deleteUrl="/role/update"
        keyDelete="id"
        route="/role/list"
        title={"نقش ها"}
        elements={[
          {
            name: "عنوان",
            key: "title",
          },
        ]}
      />
    </div>
  );
}

export default List;
