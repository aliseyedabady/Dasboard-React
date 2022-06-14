import React, { Fragment, useState } from "react";
import toast from "react-hot-toast";
// import { useGetData } from "react";
import Modal from "../Modal";
import Table from "../Table";
import Form from "../Form/index";
function Index({ form, setForm, element }) {
  const filterData = id => {
    let oldData = [...form[element.nested]].filter(
      (card, count) => count != id
    );
    toast.success("آيتم پیمان با موفقیت حذف شد");
  };

  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);
  return (
    <Fragment>
      <div className="row">
        <Modal show={modal} onHide={() => setModal(false)}>
          <Form
            title={"ثبت آیتم جریمه"}
            callBack={data => {
              if (form[element.key]) {
                setForm({
                  ...form,
                  [element.key]: [...form[element.key], data],
                });
              } else {
                setForm({ ...form, [element.key]: [data] });
              }
            }}
            elements={{
              btnName: "ایجاد",
              form: [
                {
                  name: "عنوان",
                  key: "title",
                  type: "input",
                  col: "col-md-3",
                },
                {
                  name: "آیتم پیمان",
                  key: "peymanitems_id",
                  type: "select",
                  col: "col-md-3",
                  options: {
                    rote: "/select/data",
                    key: ["peymanItem"],
                  },
                },
                {
                  name: "مجموع",
                  key: "total",
                  type: "input",
                  col: "col-md-3",
                },
                {
                  name: "مبلغ هر واحد",
                  key: "price",
                  type: "input",
                  col: "col-md-3",
                },
                {
                  name: "ضریب",
                  key: "zarib",
                  type: "input",
                  col: "col-md-3",
                },
                {
                  name: "تعداد روز",
                  key: "countofdays",
                  type: "input",
                  col: "col-md-3",
                },
              ],
            }}
          />
        </Modal>
      </div>
      <div className="my-4">
        <Table
          operations={[
            { type: "delete", url: "/realperson/update", state: "" },
            {
              type: "show",
              to: "/Employee/edit",
            },
          ]}
          nested={form[element.key] || []}
          title={"آحاد پیمان"}
          elements={[
            {
              name: "عنوان",
              key: "title",
            },
            // {
            //   name: "آیتم پیمان",
            //   key: "peymanitems_id",
            // },
            {
              name: "مجموع",
              key: "total",
            },
            {
              name: "مبلغ هر واحد",
              key: "price",
            },
            {
              name: "ضریب",
              key: "zarib",
            },
            {
              name: "تعداد روز",
              key: "countofdays",
            },
          ]}
        />
      </div>

      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center">
            <button onClick={() => setModal(true)} className="btn btn-primary">
              <span>ثبت آيتم پیمان جدید</span>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
