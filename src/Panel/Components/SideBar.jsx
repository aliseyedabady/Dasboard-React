import React from "react";
import { Link } from "react-router-dom";
import { AdminRoutes } from "../Router";
import { AiOutlineLeft } from "react-icons/ai";
import NesRoute from "../../Common/Components/NesRoutes/index";
function SideBar() {
  return (
    <div>
      <div>
        <Link className="link" to={"/dashboard"}>
          <span style={{ fontSize: "20px" }} className="m-2 mx-3">
            داشبورد
          </span>
        </Link>
      </div>
      <NesRoute routes={AdminRoutes} />
    </div>
  );
}

export default SideBar;
