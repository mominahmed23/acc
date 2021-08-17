import React from "react";
import { Button, PageHeader, Tabs } from "antd";
import Timelog from "./TimeLog";
import Myrequests from "./MyRequests";
import Timesheet from "./TimeSheet";

const { TabPane } = Tabs;
export default function TimeLog() {
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="Time Logs"
        style={{ backgroundColor: "white" }}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Time Log" key="1">
              <Timelog />
            </TabPane>
            <TabPane tab="My Requests" key="2">
              <Myrequests />
            </TabPane>
            <TabPane tab="Timesheet" key="3">
              <Timesheet />
            </TabPane>
          </Tabs>
        }
      ></PageHeader>
    </>
  );
}
