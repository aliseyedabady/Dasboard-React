import Form from "../../Common/Components/Form";
import Map from "../Screens/Map/Pages";
import ListEmployee from "../Screens/Employee/List";
import ListContractor from "../Screens/Contractor/List";
import CreateUser from "../Screens/Employee/Create";
import ListRoles from "../Screens/Role/List";
import CreateRoles from "../Screens/Role/Create";
import CreateEmployee from "../Screens/Employee/Create";
import EditEmployee from "../Screens/Employee/Edit";
import CreateContractor from "../Screens/Contractor/Create";
import CreateParametr from "../Screens/Parametrs/Create";
import ListParametr from "../Screens/Parametrs/List";
import ListFaultsItems from "../Screens/FaultItem/List";
import CreateFaultItems from "../Screens/FaultItem/Create";
import ListWorkerGroup from "../Screens/WrokerGroup/List";
import CreateWorkerGroup from "../Screens/WrokerGroup/Create";
import ListClassification from "../Screens/Classification/List";
import CreateClassification from "../Screens/Classification/Create";
import ListServiceGroup from "../Screens/ServiceGroup/List";
import CreateServiceGroup from "../Screens/ServiceGroup/Create";
import ListItemPeyman from "../Screens/PeymanItem/List";
import CreateItemPeyman from "../Screens/PeymanItem/Create";
import ListPeyman from "../Screens/Peyman/List";
import CreatePeyman from "../Screens/Peyman/Create";
import ListFault from "../Screens/Fault/List";
import CreateFault from "../Screens/Fault/Create";
import Dashboard from "../Screens/Dashboard/Page/index";
import { BsBorderAll } from "react-icons/bs";

export const Admin = [{ key: "form", component: Form }];

export const AdminRoutes = [
  {
    key: "Basic",
    route: false,
    icon: <BsBorderAll />,
    children: [
      {
        title: "مدیریت کاربران",
        key: "persons",
        route: false,
        children: [
          {
            path: "/roles",
            name: "Roles",
            component: ListRoles,
            title: "مدیریت فروشنده ها",
            show: true,
            key: "Roles",
            route: true,
          },
          {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            title: "داشبورد",
            show: false,
            key: "Roles",
            route: true,
          },
          {
            path: "/roles/create",
            name: "Roles",
            component: CreateRoles,
            title: "ایجاد نقش",
            show: false,
            key: "Roles",
            route: true,
          },
          {
            path: "/Employees",
            name: "Employees",
            component: ListEmployee,
            title: "مدیریت کاربران",
            show: true,
            key: "empoloyee",
            route: true,
          },
          {
            path: "/Employees/create",
            name: "Employees",
            component: CreateEmployee,
            title: "ایجاد کارمند",
            show: false,
            key: "empoloyee",
            route: true,
          },
        ],
      },
      {
        title: "مدیریت محصولات",
        key: "peymans",
        route: false,
        children: [
          {
            path: "/Parametrs",
            name: "Parametrs",
            component: ListParametr,
            title: "مدیریت محصولات",
            show: true,
            key: "Rolddwes",
            route: true,
          },
        ],
      },

      {
        title: "تنظیمات",
        key: "fault",
        route: false,
        children: [
          {
            path: "/Fulat",
            name: "Fault",
            component: ListFault,
            title: "تنظیمات عمومی",
            show: true,
            key: "ListItemPeyman",
            route: true,
          },
        ],
      },
    ],
  },
];

export const renderComponent = key => {
  let result = {
    component: <p>flaw,flawf afl,AiFillCaretDownawf,AiFillCaretDown</p>,
  };
  Admin.map(admin => {
    if (admin.key === key) {
      result = admin;
    }
  });
  return result;
};
