import React, { useState } from "react";
import DropFile from "../DropFile";
import {
  DateTimeInput,
  DateTimeInputSimple,
  DateInput,
  DateInputSimple,
} from "react-hichestan-datetimepicker";
import { useSetForm } from "../../../Hooks/SetForm";
import { Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { dateInputYMD } from "../../Function";
import Select from "react-select";
import SelectApi from "../Select/index";
import TimePicker from "../TimePicker/index";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormTable from "../FormTable";
import FormolInput from "../FormolInput";
import RelatedSelect from "../RelatedSelect";
import Region from "../Region/index";
function Form({ elements, title, initial, callBack }) {
  const { form, server, setForm, loadingBtn } = useSetForm({
    url: elements.url,
    message: true,
  });
  const checkAkeyExist = (data, key, nested) => {
    if (nested) {
      if (nested in data) {
        if (key in data[nested]) {
          return data[nested][key];
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if ([key] in data) {
        return data[key];
      }
      return false;
    }
  };

  const checkSelect = (element, id) => {
    if (element.nested) {
      if (form[element.nested] && form[element.nested][element.key] == id) {
        return true;
      }
    } else {
      if (form[element.key] == id) {
        return true;
      }
    }
  };

  const parsData = (data, form) => {
    return (
      data &&
      [...data].map(({ id: value, name: label }) => ({
        value,
        label,
      }))
    );
  };

  const handlerMultiSelect = (arr, key, nested) => {
    arr = arr.map(({ value }) => value);
    if (nested) {
      setForm({ ...form, [nested]: { ...form[nested], [key]: arr } });
    } else {
      setForm({ ...form, [key]: arr });
    }
  };
  const checkDate = () => {
    if (!("start_date" in form && "exp_register" in form)) {
      setForm({
        ...form,
        // start_date: ConvertDate(window.$(".start_date").val()),
        // exp_register: ConvertDate(window.$(".exp_register").val()),
      });
    }
  };

  const chekElemet = element => {
    switch (element.type) {
      case "input":
        return (
          <div key={element.key} className={`my-2 ${element.col}`}>
            <label
              // className={`${labelStyle ? "bg-success" : "bg-danger"}`}
              htmlFor=""
            >
              {element.name}
            </label>
            <input
              maxLength={element.check}
              className="form-control input-form"
              style={
                {
                  // borderColor: labelStyle && labelStyle[element.key] && "red",
                }
              }
              value={
                checkAkeyExist(element, "nested")
                  ? checkAkeyExist(form, element.key, element.nested)
                    ? checkAkeyExist(form, element.key, element.nested)
                    : ""
                  : checkAkeyExist(form, element.key)
                  ? checkAkeyExist(form, element.key, element.nested)
                  : ""
              }
              onChange={({ target: { value } }) => {
                if ("check" in element) {
                  if ("nested" in element) {
                    setForm({
                      ...form,
                      [element.nested]: {
                        ...form[element.nested],
                        [element.key]: value,
                      },
                    });
                  } else {
                    setForm({ ...form, [element.key]: value });
                  }
                } else {
                  if ("nested" in element) {
                    setForm({
                      ...form,
                      [element.nested]: {
                        ...form[element.nested],
                        [element.key]: value,
                      },
                    });
                  } else {
                    setForm({ ...form, [element.key]: value });
                  }
                }
              }}
            />
          </div>
        );
      case "select":
        if (element.options.rote) {
          return <SelectApi data={element} form={form} setForm={setForm} />;
        } else {
          return (
            <div key={element.key} className={` my-2 ${element.col}`}>
              <label htmlFor="">{element.name}</label>
              <Select
                placeholder={element.name}
                className="input-form"
                options={element.options}
                onChange={({ value }) => {
                  setForm({ ...form, [element.key]: value });
                }}
              />
            </div>
          );
        }

      case "textArea":
        return (
          <div key={element.key} className={`my-2 ${element.col}`}>
            <label htmlFor="">{element.name}</label>
            <textarea
              value={
                checkAkeyExist(element, "nested")
                  ? checkAkeyExist(form, element.key, element.nested)
                    ? checkAkeyExist(form, element.key, element.nested)
                    : ""
                  : checkAkeyExist(form, element.key)
                  ? checkAkeyExist(form, element.key, element.nested)
                  : ""
              }
              className="form-control input-form"
              onChange={({ target: { value } }) => {
                if ("nested" in element) {
                  setForm({
                    ...form,
                    [element.nested]: {
                      ...form[element.nested],
                      [element.key]: value,
                    },
                  });
                } else {
                  setForm({ ...form, [element.key]: value });
                }
              }}
            />
          </div>
        );
      case "file":
        return (
          <div key={element.key} className={`my-2 ${element.col}`}>
            <label>{element.name}</label>
            <DropFile
              // value={form[element.key]}
              accept={element.accept}
              set={e => {
                setForm({ ...form, [element.key]: e });
              }}
            />
          </div>
        );
      case "date":
        return (
          <div key={element.key} className={`my-2 ${element.col}`}>
            <label>{element.name}</label>

            <DateInput
              className="form-control input-form"
              btnName="click"
              name={"myDateTime"}
              closeLabel="تایید"
              onChange={({ target: { value } }) => {
                setForm({ ...form, [element.key]: dateInputYMD(value) });
              }}
              value={
                checkAkeyExist(element, "nested")
                  ? checkAkeyExist(form, element.key, element.nested)
                    ? checkAkeyExist(form, element.key, element.nested)
                    : ""
                  : checkAkeyExist(form, element.key)
                  ? checkAkeyExist(form, element.key, element.nested)
                  : ""
              }
            />
          </div>
        );
      case "check":
        return (
          <div key={element.key} className={`my-2 ${element.col}`}>
            <label>{element.name}</label>

            <input
              type="checkbox"
              onChange={({ target: { value } }) => {
                if (form[element.key]) {
                  setForm({ ...form, [element.key]: !form[element.key] });
                } else {
                  setForm({ ...form, [element.key]: true });
                }
              }}
            />
          </div>
        );
      case "time":
        return (
          <TimePicker
            form={form}
            setForm={setForm}
            key={element.key}
            element={element}
          />
        );
      case "formTable":
        return <FormTable form={form} setForm={setForm} element={element} />;
      case "formol":
        return <FormolInput form={form} setForm={setForm} element={element} />;
      case "relation":
        return (
          <RelatedSelect form={form} setForm={setForm} element={element} />
        );
      case "region":
        return <Region form={form} setForm={setForm} element={element} />;
      default:
        break;
    }
  };
  const chackValidate = () => {
    let validate = { status: true, elements: [] };
    elements.form.map(element => {
      if (!form[element.key] && !element.noNeed) {
        validate = {
          status: false,
          elements: [...validate.elements, element],
        };
      }
    });
    return validate;
  };
  const toastValidate = validate => {
    let str = "";
    validate.map((element, index) => {
      return (str +=
        element.name + `${index == validate.length - 1 ? "" : " , "}`);
    });
    toast.error(str + " وارد نشده است ");
  };
  return (
    <div className="py-2">
      <div className="row">
        <div className="col">
          <h6>{title}</h6>
        </div>
      </div>
      <div className="row">
        {elements && elements["form"].map(element => chekElemet(element))}
      </div>
      <div className="row">
        <div className="col">
          <Button
            onClick={() => {
              const { status, elements } = chackValidate();
              if (callBack) {
                status
                  ? callBack({ ...initial, ...form })
                  : toastValidate(elements);
              } else {
                status ? server(initial) : toastValidate(elements);
              }
            }}
            disabled={loadingBtn}
            variant="contained"
            dir="ltr"
          >
            {loadingBtn ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <span style={{ fontSize: "12px" }}>{elements.btnName}</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
