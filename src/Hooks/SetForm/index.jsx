import Fetch from "../../Request/httpService";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const useSetForm = ({
  url,
  initialState = {},
  message = false,
  local = false,
  redirect = false,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeForm = ({ key, value }) => {
    setForm({ ...form, [key]: value });
  };
  const { user } = useSelector(state => state);
  const [form, setForm] = useState({});
  const [data, setData] = useState({});
  const [loadingBtn, setLoadingBtn] = useState(false);

  const server = async data => {
    setLoadingBtn(true);
    let obj = {
      ...initialState,
      ...form,
      api_token: user.api_token,
      ...data,
    };
    let request = {
      url,
      data: obj.toFormData(),
      method: "POST",
      multipart: true,
    };
    await Fetch(request).then(response => {
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

      setData(response.data);
      setLoadingBtn(false);
      if (message && response.message != "") {
        switch (response.status) {
          case "success":
            toast.success(response.message);
            return;
          default:
            toast.error(response.message);
            return;
        }
      }
    });
  };
  return {
    form,
    data,
    server,
    changeForm,
    setForm,
    loadingBtn,
  };
};
