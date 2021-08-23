import React from "react";
import { Button, PageHeader } from "antd";
import "../components/Clients/Client.css";
import Client from "./../components/Clients/Client";

const ClientPage = () => {
  return (
    <PageHeader
      className="site-page-header-responsive"
      title="My Clients(1)"
      style={{ backgroundColor: "white" }}
      footer={<Client />}
    ></PageHeader>
  );
};
export default ClientPage;
