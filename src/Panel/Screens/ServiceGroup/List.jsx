import { Tab } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Form from "../../../Common/Components/Form";
import Table from "../../../Common/Components/Table/index";
function List() {
  return (
    <div className="m-2">
      <div className="mb-2 d-flex justify-content-end">
        <Link
          className="link btn btn-primary text-white"
          to={"/ServiceGroup/create"}
        >
          ایجاد گروه خدمات
        </Link>
      </div>
      <Table
        operations={[
          {
            type: "edit",
            btnName: "اضافه کردن زیر شاخه",
            component: ({ data }) => {
              return (
                <Form
                  initial={{ rootid: data.id, function: "newchildren" }}
                  elements={{
                    btnName: "ایجاد",
                    url: "/servicegroup/create",
                    form: [
                      {
                        name: "عنوان زیرشاخه",
                        key: "childrentitle",
                        type: "input",
                        col: "col-md-3",
                      },
                    ],
                  }}
                />
              );
            },
          },
        ]}
        route="/servicegroup/list"
        title={"گروه خدمات"}
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
