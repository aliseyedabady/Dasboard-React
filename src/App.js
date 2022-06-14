import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./Redux";
import "./assets/styles/style.scss";
import { Provider, useSelector } from "react-redux";
import MainContext from "./Context/MainContext";
import Login from "./Web/Auth/Pages";
import Dashboard from "./Panel/Screens/Dashboard/Page/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modern-drawer/dist/index.css";
import "react-multilevel-sidebar/src/Sidebar.css";
import { AdminRoutes } from "./Panel/Router";
import Panel from "./Panel/Layout/index";
import "react-tabs/style/react-tabs.css";
import NavigationScroll from "./Common/Components/NavigationScroll";
import "leaflet/dist/leaflet.css";
import { configureStore } from "@reduxjs/toolkit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
Object.defineProperty(Object.prototype, "toFormData", {
  value: function () {
    const formData = new FormData();
    const binder = (data, parentKey) => {
      if (
        data &&
        typeof data === "object" &&
        !(data instanceof Date) &&
        !(data instanceof File) &&
        !(data instanceof Blob)
      ) {
        Object.keys(data).forEach(key => {
          binder(data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
      } else {
        const value =
          data === null ? "" : data instanceof Date ? data.toISOString() : data;
        formData.append(parentKey, value);
      }
    };
    binder(this);
    return formData;
  },
  enumerable: false,
});
const store = configureStore({ reducer: rootReducer });
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: `"Vazir"`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <MainContext>
            {/* <NavigationScroll> */}
            <BrowserRouter>
              {/* {Middleware()}
               */}
              <AppSrv />
              <Toaster position="top" reverseOrder={false} />
            </BrowserRouter>
            {/* </NavigationScroll> */}
          </MainContext>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
const AppSrv = () => {
  const { user } = useSelector(state => state);
  const Middleware = () => {
    if (user) {
      return <Panel />;
    } else {
      return (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      );
    }
  };
  return Middleware();
};

export default App;
