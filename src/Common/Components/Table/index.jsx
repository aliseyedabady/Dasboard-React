import React, { useEffect, useState } from "react";
import {
  ToDateJalali,
  ToTimeJalali,
  cutText,
  timeSince,
} from "../../../Common/Function";
import Loading from "../Loading";
import Pagination from "react-js-pagination";
import { Spinner } from "react-bootstrap";
import { useRequest } from "../../../Hooks";
import BoxShadow from "../BoxShadow/index";
import { useArr } from "../../../Hooks/ArrOp";
import { useSearchObject } from "../../../Hooks/useSearchObject";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsInfoSquare } from "react-icons/bs";
import Dialog from "../Dialog";
import { useDeleteRow } from "../../../Hooks/useDeleteRow";
import { useEditRow } from "../../../Hooks/useEditRow";
import Modal from "../Modal";
import Form from "../Form/index";
import { useNavigate } from "react-router-dom";

function Index({
  elements,
  route,
  nested,
  title,
  deleteUrl,
  keyDelete,
  editComponent,
  to,
  operations,
}) {
  // Hooks Start
  const { selected, setSelected, isInArray, toggleSelect, arrLength } =
    useArr();
  const { findNestedObj } = useSearchObject();
  const { Get, get, loading, show, setShow, handleClose, handleShow } =
    useRequest({
      url: "notic/create",
      toast: false,
      getUrl: route,
    });
  const { row, setRow, deleteRow } = useDeleteRow({ url: deleteUrl });
  const { modal, setModal, editRow } = useEditRow({});
  // Hooks End
  const closeModal = () => {
    setModal({ show: false });
    Get();
  };
  useEffect(() => {
    if (!nested) {
      Get();
    }
  }, []);
  const navigation = useNavigate();
  if (loading.get && !nested) {
    return <Loading count={1} col={12} height={600} />;
  }
  const renderCloumn = (row, col) => {
    switch (col.type) {
      case "date":
        return row && timeSince(row[col.key]);
      case "long":
        return row && cutText(row[col.key]);
      case "enum":
        return row && col.enum[row[col.key]];
      case "nested":
        return (
          row &&
          findNestedObj(row, col.key) &&
          findNestedObj(row, col.key)[col.key]
        );
      default:
        return row && row[col.key];
    }
  };
  const renderData = get => {
    if (get) {
      if (Array.isArray(get.data)) {
        return get.data;
      }
    } else {
      if (nested) {
        return nested;
      }
    }
  };
  const timeStamp = row => {
    return (
      <>
        <td className="">{ToTimeJalali(row.created_at)}</td>
        <td className="">{ToTimeJalali(row.updated_at)}</td>
      </>
    );
  };
  const verifyOp = () => {
    let url = "";
    operations.map(op => {
      if (op.type == "delete") {
        url = op.url;
      }
    });
    deleteRow({ [keyDelete]: selected, url });
  };
  const renderOperation = op => {
    switch (op.type) {
      case "delete":
        return (
          <button
            className="btn"
            disabled={!selected}
            onClick={() => {
              handleShow();
            }}
          >
            <AiFillDelete />

            <span className="mx-1" style={{ fontSize: "10px" }}>
              حذف
            </span>
          </button>
        );
      case "edit":
        return (
          <button
            className="btn"
            onClick={() => editRow()}
            disabled={!selected}
          >
            <FiEdit />

            <span className="mx-1" style={{ fontSize: "10px" }}>
              {op.btnName || "ویرایش"}
            </span>
          </button>
        );
      case "show":
        return (
          <button
            className="btn"
            onClick={() => navigation(op.to + "/" + selected)}
            disabled={!selected}
          >
            <BsInfoSquare />

            <span className="mx-1" style={{ fontSize: "10px" }}>
              مشاهده
            </span>
          </button>
        );

      default:
        break;
    }
  };
  return (
    <BoxShadow>
      <div className="d-flex p-2 justify-content-between align-items-center">
        <h6>{title}</h6>
        <Pagination
          activePage={get && get.current_page}
          itemsCountPerPage={15}
          totalItemsCount={get && get.total}
          onChange={data => {
            Get({ page: data });
          }}
          itemClass={"page-item"}
          linkClass={"page-link"}
        />
      </div>
      <div
        className={`d-flex align-items-center  ${
          selected ? "" : ""
        }  bg-gradient `}
      >
        {operations &&
          operations.map(op => {
            return renderOperation(op);
          })}
      </div>
      <table className="table">
        <thead>
          <tr className="row100 head">
            <th scope="col "></th>
            <th scope="col ">#</th>

            {elements.map(({ name }, count) => {
              return (
                <th key={count} scope="col column2">
                  {name}
                </th>
              );
            })}
            <th scope="col ">تاریخ ایجاد</th>
            <th scope="col ">تاریخ ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {console.log(renderData(get))}
          {renderData(get) &&
            renderData(get).map((row, count) => {
              return (
                <tr
                  key={count}
                  onClick={() => {
                    toggleSelect(row.id);
                  }}
                  className={` pointer body ${
                    selected == row.id ? "bg-warning" : ""
                  }`}
                >
                  <th>
                    <input
                      type={"checkbox"}
                      onChange={() => {
                        toggleSelect(row.id);
                      }}
                      checked={selected == row.id}
                    />
                  </th>
                  <th scope="row ">{count + 1}</th>
                  {elements.map((clomn, count) => {
                    return (
                      <td key={count} className="">
                        {renderCloumn(row, clomn)}
                      </td>
                    );
                  })}
                  {timeStamp(row)}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center align-items-center">
        {!nested && (
          <div className="col-12 mt-4 mb-1">
            <div className="row justify-content-center"></div>
          </div>
        )}
      </div>
      <Dialog
        header={"حذف"}
        body={"آیا میخواهید این ردیف را حذف کنید ؟‌"}
        show={show}
        handleClose={handleClose}
        verify={verifyOp}
      />
      {modal.show && (
        <Modal title={"ویرایش"} show={modal.show} onHide={closeModal}>
          {operations &&
            operations.map(op => {
              if (op.type == "edit") {
                return op.component({
                  data:
                    get &&
                    get.data &&
                    get.data.filter(ele => ele.id == selected)[0],
                });
              }
            })}
        </Modal>
      )}
    </BoxShadow>
  );
}

export default Index;
