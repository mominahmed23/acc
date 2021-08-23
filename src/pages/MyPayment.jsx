import React , { useState }  from "react";
import { Button, PageHeader } from "antd";
import Payment from "./../components/MyPayment/Payment";
import "./../components/MyPayment/Payment.css";
import PopupModal from "./../components/PopupModal";
import ReportPopup from "./../components/ReportPopup";


const MyPaymentPage = () => {
  const [reportModal, setReportModal] = useState(false);
  
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
export default MyPaymentPage;
