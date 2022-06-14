import React, { useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useLogin } from "../Hooks/index";
import wf from "../../../assets/images/login.png";

function Login() {
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);
  const { login, form, setForm, loadingBtn } = useLogin();
  console.log("form", form);

  return (
    <div
      style={{ height: "100vh", backgroundColor: "#ebeeef" }}
      className="login-wrapper d-flex justify-content-center align-items-center"
    >
      <div className="loginbox">
        <div className="image-area position-relative">
          <img src={wf} style={{ width: "660px", height: "350px" }} />
          <h5 style={{ position: "absolute", bottom: "50%", right: "50%" }}>
            ورود
          </h5>
        </div>
        <div className="form-area">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <label className="mx-2">نام کاربری</label>
            <input
              onChange={({ target: { value } }) => {
                setForm({ ...form, username: value });
              }}
              className="form-control input-form w-25"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <label className="mx-2">رمز عبور</label>
            <input
              onChange={({ target: { value } }) => {
                setForm({ ...form, password: value });
              }}
              className="form-control input-form w-25"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <LoadCanvasTemplateNoReload />
          </div>
          <div className="d-flex align-content-center justify-content-center mb-3">
            <label className="mx-2">کد امنیتی</label>
            <input
              placeholder="کد امنیتی"
              className="form-control input-form w-25"
              onChange={({ target: { value } }) => {
                setForm({ ...form, code: value });
              }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button onClick={login}>
              {loadingBtn ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "ورود"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
