import React from "react";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        style={{ flexGrow: "1", backgroundColor: "gray" }}
        className="container"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;