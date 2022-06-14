import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import Fetch from "../../../Request/httpService";
export const useLogin = () => {
  const [form, setForm] = useState({});
  const [loadingBtn, setLoadingBtn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    if (validateCaptcha(form.code) === true) {
      server();
    } else {
      alert("کد امنیتی اشتباه وارد شده است");
    }
  };
  const server = async () => {
    setLoadingBtn(true);
    let obj = {
      ...form,
    };
    await Fetch({
      url: "/login",
      data: { ...form },
      method: "POST",
    }).then(response => {
      if (response && response.data && response.status === "success") {
        dispatch({
          local_storage: {
            key: "user",
            value: response.data,
          },
          payload: { user: response.data },
          type: "SET",
        });
        toast.success(response.message);
        navigate("/dashboard");
      } else {
        toast.error(response.message);
      }
      setLoadingBtn(false);
    });
  };
  return {
    login,
    form,
    setForm,
    loadingBtn,
  };
};
