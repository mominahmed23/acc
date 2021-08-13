import React from "react";
import { Button, PageHeader } from "antd";
import Payment from "./Payment";
import "./Payment.css";
export default function MyPayment() {
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="Payments"
        extra={[
          <Button style={{ color: "red" }} key="1">
            Genrate Reports
          </Button>,
        ]}
        style={{ backgroundColor: "white" }}
        footer={<Payment />}
      ></PageHeader>
    </>
  );
}
