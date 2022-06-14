import React, { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
// import toast from "react-hot-toast";
import { REQUEST } from "../Request";
const MAINCONTEXT = createContext();
let GET = () => { };
let SET = () => { };
let REMOVE = () => { };
function MainContext({ children }) {
  const state = useSelector(state => state);

  const get = async props => {
    let obj = {};
    if (state.user) {
      obj = {
        api_token: state.user.api_token,
        ...props.data,
      };
    } else {
      obj = {
        ...props.data,
      };
    }
    let request = {
      url: props.url,
      method: "post",
      data: obj,
    };
    if (props.page) {
      request.url = `${props.url}?page=${props.page}`;
    }

    const response = await REQUEST({ request: request });
    const { status, message, data } = response;

    switch (status) {
      case "Success":
        if (props.stat) {
          toast.success(message);
          return { data };
        }
        if (props.mess) {
          return { data, message };
        }
        return data;
      case "error":
        if (props.stat) {
          toast.error(message);
          return { message, status };
        }
        if (props.toast) {
          return false;
        }
        toast.error(message);
        return false;
    }
  };

  const set = async props => {
    let obj = {};
    if (state.user) {
      obj = {
        api_token: state.user.api_token,
        ...props.data,
      };
    } else {
      obj = {
        ...props.data,
      };
    }
    let request = {
      url: props.url,
      method: "post",
      data: obj.toFormData(),
      multipart: true,
    };
    const response = await REQUEST({ request: request });
    const { status, message, data } = response;
    if (props.guest) {
      return data;
    }

    switch (status) {
      case "Success":
        if (props.stat) {
          return true;
        }
        if (props.neddata) {
          toast.success(message);
          return data;
        }
        toast.success(message);
        return true;
      default:
        toast.error(message);
        return false;
    }
  };

  const remove = async props => {
    let obj = {};
    if (state.user) {
      obj = {
        api_token: state.user.api_token,
        ...props.data,
      };
    } else {
      obj = {
        ...props.data,
      };
    }
    let request = {
      url: props.url,
      method: "post",
      data: obj.toFormData(),
      multipart: true,
    };
    const response = await REQUEST({ request: request });
    const { status, message } = response;
    switch (status) {
      case "Success":
        toast.success(message);
        return true;
      case "error":
        toast.error(message);
        return false;
    }
  };
  GET = get;
  SET = set;
  REMOVE = remove;
  return (
    <MAINCONTEXT.Provider value={{ state }}>{children}</MAINCONTEXT.Provider>
  );
}
export default MainContext;
export const MaiNContext = () => {
  return useContext(MAINCONTEXT);
};
export const REQUESTGET = async props => {
  return await GET(props);
};
export const REQUESTSET = async props => {
  return await SET(props);
};
export const REQUESTREMOVE = async props => {
  return await REMOVE(props);
};
