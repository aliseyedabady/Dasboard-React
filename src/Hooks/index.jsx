import Fetch from "../Request/httpService";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const useRequest = ({
  url,
  initialState = {},
  toast = false,
  local = false,
  redirect = false,
  getUrl,
  noNeedPaginate,
}) => {
  const navigate = useNavigate();

  //   const { addToast } = useToasts();
  const dispatch = useDispatch();
  const changeForm = ({ key, value }) => {
    setForm({ ...form, [key]: value });
  };
  const [form, setForm] = useState({});
  const [data, setData] = useState({});
  const [get, setGet] = useState(null);
  const [loading, setloading] = useState({ get: true });
  const [loadingBtn, setLoadingBtn] = useState(false);

  const { user } = useSelector(state => state);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    Get();
  };
  const handleShow = () => setShow(true);
  const server = async () => {
    setLoadingBtn(true);
    let obj = {
      ...initialState,
      ...form,
      // api_token: user && user.api_token,
    };
    await Fetch({
      url,
      data: { ...obj },
    }).then(response => {
      console.log("res", response);
      if (local && response && response.data && response.status === "success") {
        dispatch({
          local_storage: {
            key: local,
            value: response.data,
          },
          payload: { [local]: response.data },
          type: "SET",
        });
        if (redirect) {
          navigate(redirect);
        }
      }
      if (toast && response.message != "") {
        // addToast(response.message, { appearance: response.status });
      }
      setData(response.data);
      setLoadingBtn(true);
    });
  };
  const Get = async request => {
    console.log("req", request);
    setloading({ get: true });
    let url = getUrl;
    if (request && request.page) {
      url = `${getUrl}?page=${request.page}`;
    }
    await Fetch({
      url,
      data: {
        ...initialState,
        ...form,
        ...request,
        ...{ api_token: user.api_token },
      },
      method: "POST",
    }).then(response => {
      console.log("res", response);
      if (response && response.data && response.status === "success") {
        setGet(response.data);
      }
      setloading({ get: false });
    });
  };
  const deleteRow = async request => {
    setloading({ delete: request.id });
    await Fetch({
      ...request,
    }).then(response => {
      setloading({ delete: false });
      if (response.message != "") {
        // addToast(response.message, { appearance: response.status });
      }
      Get({ page: request.pageNumber });
    });
  };
  return {
    form,
    data,
    server,
    changeForm,
    setForm,
    Get,
    get,
    setGet,
    loading,
    deleteRow,
    loadingBtn,
    show,
    setShow,
    handleClose,
    handleShow,
  };
};
