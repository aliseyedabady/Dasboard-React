import React, { Fragment, useRef, useState } from "react";
import Content from "../Components/Content";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineClose,
  AiOutlineSetting,
  AiFillCaretDown,
  AiOutlineUser,
} from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import Sidebar from "../Components/SideBar";
import { useCustomDispach } from "../../Hooks/useCustomDispach";
import { useSelector } from "react-redux";
import wf from "../../assets/images/shahrdari.png";
import { useOutsideAlerter } from "../../Hooks/useOutSideRef";
function Layout() {
  const [drawer, setDrawer] = useState(true);
  const { handler } = useCustomDispach({ redirect: "/" });
  const { user } = useSelector(state => state);
  const [showDropDown, setShowDropDown] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter({
    ref: wrapperRef,
    triger: () => {
      setShowDropDown(false);
    },
  });
  return (
    <Fragment>
      <div className="d-flex">
        <nav className={`sidebar ${drawer ? "open" : "close"}`}>
          {/* <h5 className="mb-4">شهرداری نیشابور</h5> */}
          <Sidebar />
        </nav>
        <div style={{ flex: 1 }}>
          <nav className="navbar col-lg-12 col-12   " style={{ flex: 1 }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ flex: 1 }}
            >
              <div className="d-flex">
                <button
                  className="btn"
                  onClick={() => {
                    setDrawer(prev => !prev);
                  }}
                >
                  {drawer ? (
                    <AiOutlineClose color="#000" />
                  ) : (
                    <GiHamburgerMenu color="#000" />
                  )}
                </button>
                <div className="d-flex align-items-center">
                  <BsSearch
                    color="#A0A5BA"
                    size={12}
                    style={{ marginLeft: "5px" }}
                  />
                  <input
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      fontSize: "12px",
                      color: "#A0A5BA",
                      height: "30px",
                    }}
                    className="p-1"
                    placeholder="جستجو ..."
                  />
                </div>
              </div>

              <div className="d-flex align-items-center ">
                <li
                  ref={wrapperRef}
                  className="nav-item dropdown"
                  style={{ listStyle: "none" }}
                >
                  <a
                    className="link d-flex pointer justify-content-between align-items-center"
                    style={{ color: "#A0A5BA" }}
                    onClick={() => {
                      setShowDropDown(prev => !prev);
                    }}
                  >
                    {user.fullname}
                    <AiFillCaretDown color="#A0A5BA" />
                  </a>
                  <div
                    className={`dropdown-menu  ${showDropDown ? "show" : ""}`}
                    aria-labelledby="navbarDropdown"
                    style={{ marginTop: "17px" }}
                  >
                    <a
                      className="dropdown-item  d-flex align-items-center"
                      style={{ textAlign: "right", fontSize: "12px" }}
                      href="#"
                    >
                      <AiOutlineUser color="A0A5BA" />

                      {user.username}
                    </a>

                    <div className="dropdown-divider" />
                    <button
                      className="btn d-flex justify-content-between align-items-center "
                      style={{ color: "#A0A5BA", fontSize: "12px" }}
                      onClick={() => {
                        handler({ type: "CLEAR" });
                      }}
                    >
                      <BiExit color="#A0A5BA" className="mx-2" />
                      <span
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        خروج
                      </span>
                    </button>
                  </div>
                </li>

                <button className="btn d-flex justify-content-between align-items-center ">
                  <BsFillBellFill color="A0A5BA" />
                </button>
                <button className="btn d-flex justify-content-between align-items-center ">
                  <AiOutlineSetting color="A0A5BA" />
                </button>
              </div>
            </div>
          </nav>
          <div
            className="container-fluid "
            style={{
              backgroundColor: "#F5F6FA",
            }}
          >
            <Content />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
