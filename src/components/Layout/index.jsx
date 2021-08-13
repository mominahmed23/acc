import React from "react";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        style={{ flexGrow: "1", backgroundColor: "#eeeeee" }}
        className="custom-card"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
