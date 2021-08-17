import React from "react";
import { Button, PageHeader } from "antd";
import Client from "./Client";
import "./Client.css";
const MyPayment = () => {
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="My Clients(1)"
        style={{ backgroundColor: "white" }}
        footer={<Client />}
      ></PageHeader>
    </>
  );
};
export default MyPayment;
