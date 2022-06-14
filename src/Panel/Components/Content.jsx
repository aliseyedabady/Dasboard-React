import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminRoutes } from "../Router/index";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
function Content() {
  let JSX = useState([])[0];
  const renderRoutes = routes => {
    routes.forEach((route, key) => {
      if (route.children) {
        return renderRoutes(route.children);
      } else {
        JSX.push(
          <Route key={key} path={route.path} element={<route.component />} />
        );
      }
    });
  };

  return (
    <Routes>
      {renderRoutes(AdminRoutes)}
      {JSX}
    </Routes>
  );
}

export default Content;
