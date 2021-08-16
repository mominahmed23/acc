import React from "react";
import { Button, PageHeader } from "antd";
import Client from "./Client";
import "./Client.css";
export default function MyPayment() {
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
}
