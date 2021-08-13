import { Button, PageHeader } from "antd";
import React from "react";
import { Tabs } from "antd";
import LegalSetting from "./LegalSetting";
import "./LegalSetting.css";

const { TabPane } = Tabs;
const AccountSetting = () => {
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="Account Setting"
        extra={[
          <Button style={{ color: "red" }} key="1">
            Reset Password
          </Button>,
        ]}
        style={{ backgroundColor: "white" }}
        footer={
          <Tabs defaultActiveKey="1" style={{ backgroundColor: "white" }}>
            <TabPane
              tab="Legal Setting"
              key="1"
              style={{ backgroundColor: "#ece8e8" }}
            >
              {<LegalSetting />}
            </TabPane>
          </Tabs>
        }
      ></PageHeader>
    </>
  );
};

export default AccountSetting;
