import React from "react";
import { Link } from "react-router-dom";
import { AdminRoutes } from "../Router";
import { AiOutlineLeft } from "react-icons/ai";
import NesRoute from "../../Common/Components/NesRoutes/index";
function SideBar() {
  return (
    <div>
      <div>
        <h4 className="m-2 mx-3">داشبورد</h4>
      </div>
      <NesRoute routes={AdminRoutes} />
    </div>
  );
}

export default SideBar;
