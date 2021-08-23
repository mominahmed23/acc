import { Button, PageHeader } from "antd";
import React from "react";
import { Tabs } from "antd";
import LegalSetting from "./../components/AccountSetting/LegalSetting";

const AccountSettingPage = () => {
  return (
    <div>
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
            <Tabs.TabPane tab="Legal Setting" key="1">
              {<LegalSetting />}
            </Tabs.TabPane>
          </Tabs>
        }
      ></PageHeader>
    </div>
  );
};
export default AccountSettingPage;
