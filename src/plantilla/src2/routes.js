import TableList from "views/Tables.js";
import UserPage from "views/User.js";

var routes = [
  {
    path: "/user-page",
    name: "Vcards",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Generar Vcard",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
];
export default routes;
