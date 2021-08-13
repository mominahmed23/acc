import React from "react";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        style={{ flexGrow: "1", backgroundColor: "#eaeaea" }}
        className="container px-5 py-10 custom-card"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
