import React from "react";
import { PageHeader } from "antd";
import Notification from "./Notification";
const MyPayment = () => {
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="My Notification(100)"
        style={{ backgroundColor: "white" }}
        footer={<Notification />}
      ></PageHeader>
    </>
  );
};
export default MyPayment;
