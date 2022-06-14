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
    // title: "تعریف پایه",
    key: "Basic",
    route: false,
    icon: <BsBorderAll />,
    children: [
      {
        title: "مدیریت اشخاص",
        key: "persons",
        route: false,
        children: [
          {
            path: "/roles",
            name: "Roles",
            component: ListRoles,
            title: "مدیریت نقش ها",
            show: true,
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
            title: "مدیریت کارمندان",
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
          {
            path: "/Employee/edit/:row",
            name: "Employees",
            component: EditEmployee,
            title: "مشاهده کارمند",
            show: false,
            key: "editEmployee",
            route: true,
          },
          {
            path: "/Contractors",
            name: "Contractors",
            component: ListContractor,
            title: "مدیریت پیمان کاران",
            show: true,
            key: "contractor",
            route: true,
          },
          {
            path: "/Contractors/create",
            name: "Contractors",
            component: CreateContractor,
            title: "ایجاد پیمان کار",
            show: false,
            key: "empoloyee",
            route: true,
          },
        ],
      },
      {
        title: "تعریفات پایه",
        key: "peymans",
        route: false,
        children: [
          {
            path: "/Parametrs",
            name: "Parametrs",
            component: ListParametr,
            title: "مدیریت پارامتر ها",
            show: true,
            key: "Rolddwes",
            route: true,
          },
          {
            path: "/WorkerGroup",
            name: "WorkerGroup",
            component: ListWorkerGroup,
            title: "مدیریت گروه کارگران",
            show: true,
            key: "WorkerGroup",
            route: true,
          },
          {
            path: "/Parametrs/create",
            name: "Parametrs",
            component: CreateParametr,
            title: "ایجاد پارامتر",
            show: false,
            key: "awfawf",
            route: true,
          },
          {
            path: "/WorkerGroup/create",
            name: "WorkerGroup",
            component: CreateWorkerGroup,
            title: "ایجاد گروه کارگران",
            show: false,
            key: "WorkerGroupCreate",
            route: true,
          },
          {
            path: "/Classification",
            name: "Classification",
            component: ListClassification,
            title: "طبقه بندی اضافات و کسورات",
            show: true,
            key: "ListClassification",
            route: true,
          },
          {
            path: "/Classification/create",
            name: "Classification",
            component: CreateClassification,
            title: "طبقه بندی اضافات و کسورات",
            show: false,
            key: "ListClassification",
            route: true,
          },
          {
            path: "/ServiceGroup",
            name: "ServiceGroup",
            component: ListServiceGroup,
            title: "گروه خدمات",
            show: true,
            key: "ListServiceGroup",
            route: true,
          },
          {
            path: "/ServiceGroup/create",
            name: "ServiceGroup",
            component: CreateServiceGroup,
            title: "گروه خدمات",
            show: false,
            key: "CreateServiceGroup",
            route: true,
          },

          {
            path: "/FaultItem/List",
            name: "Faults",
            component: ListFaultsItems,
            title: "آیتم جریمه",
            show: true,
            key: "Faults",
            route: true,
          },
          {
            path: "/FaultItem/Create",
            name: "Faults",
            component: CreateFaultItems,
            title: "ایجاد جرایم",
            show: false,
            key: "Faults",
            route: true,
          },
        ],
      },
      {
        title: "منابع پیمان ها",
        key: "dw",
        route: false,
        children: [
          {
            path: "/PeymanItem",
            name: "PeymanItem",
            component: ListItemPeyman,
            title: "آیتم پیمان",
            show: true,
            key: "ListItemPeyman",
            route: true,
          },
          {
            path: "/PeymanItem/create",
            name: "PeymanItem",
            component: CreateItemPeyman,
            title: "آیتم پیمان",
            show: false,
            key: "CreateItemPeyman",
            route: true,
          },
          {
            path: "/Peyman",
            name: "Peyman",
            component: ListPeyman,
            title: " پیمان",
            show: true,
            key: "ListItemPeyman",
            route: true,
          },
          {
            path: "/Peyman/create",
            name: "Peyman",
            component: CreatePeyman,
            title: "ایجاد پیمان",
            show: false,
            key: "CreateItemPeyman",
            route: true,
          },
        ],
      },
      {
        title: "نظارت",
        key: "fault",
        route: false,
        children: [
          {
            path: "/Fulat",
            name: "Fault",
            component: ListFault,
            title: "ثبت جرایم روزانه",
            show: true,
            key: "ListItemPeyman",
            route: true,
          },
          {
            path: "/Fulat/Create",
            name: "Fault",
            component: CreateFault,
            title: "ثبت جرایم روزانه",
            show: false,
            key: "ListItemPeyman",
            route: true,
          },
          {
            path: "/Dashboard",
            name: "Fault",
            component: Dashboard,
            title: "ثبت جرایم روزانه",
            show: false,
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
