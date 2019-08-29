import React from "react";
import DashBoard from "./../components/DashBoard/DashBoard";
const routes = [
  {
    path: "/thien",
    exact: true,
    main: () => <DashBoard />
  }
];
export default routes;
