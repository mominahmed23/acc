import React from "react";
import { PageHeader } from "antd";
import Notification from "./../components/Notification/Notification";

const Notificationn = () => {
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

export default Notificationn;
