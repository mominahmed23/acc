import { Button, PageHeader } from "antd";
import React from "react";
import { Tabs } from "antd";
import "./LegalSetting.css";
import LegalSetting from "./LegalSetting";

const { TabPane } = Tabs;
const AccountSetting = () => {
  return (
    <>
      <PageHeader
        ghost={false}
        className="site-page-header"
        title="Account Settings"
        extra={[
          <Button style={{ color: "red" }} key="1">
            Reset Password
          </Button>,
        ]}
        footer={
          <Tabs defaultActiveKey="1" style={{ backgroundColor: "white" }}>
            <TabPane tab="Legal Setting" key="1">
              {<LegalSetting />}
            </TabPane>
          </Tabs>
        }
      ></PageHeader>
    </>
  );
};

export default AccountSetting;
