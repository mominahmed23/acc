import React from "react";
import { Button, PageHeader } from "antd";
import Payment from "./Payment";
import "./Payment.css";
import { useState } from "react/cjs/react.development";
import PopupModal from "../PopupModal";
import Modal from "antd/lib/modal/Modal";
import ReportPopup from "../ReportPopup";
const MyPayment = () => {
  const [reportModal, setReportModal] = useState(false);
  const onReportButtonCLick = () => {
    setReportModal(true);
  };
  return (
    <>
      <PageHeader
        className="tabl site-page-header-responsive"
        title="Payments"
        extra={[
          <Button
            style={{ color: "red" }}
            key="1"
            onClick={() => setReportModal(true)}
          >
            Genrate Reports
          </Button>,
        ]}
        style={{ backgroundColor: "white" }}
        footer={<Payment />}
      ></PageHeader>
      <PopupModal
        handleCencel={() => setReportModal(false)}
        isModalVisible={reportModal}
        title="Report Modal"
      >
        <ReportPopup />
      </PopupModal>
    </>
  );
};
export default MyPayment;
