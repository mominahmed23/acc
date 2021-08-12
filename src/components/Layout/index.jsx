import React from "react";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        style={{ flexGrow: "1", backgroundColor: "gray" }}
        className="container pa-5"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
