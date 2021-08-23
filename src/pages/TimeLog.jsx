import React from "react";
import { PageHeader, Tabs } from "antd";
import Timelog from "./../components/TimeTracking/TimeLog";
import Myrequests from "./../components/TimeTracking/MyRequests";
import Timesheet from "./../components/TimeTracking/TimeSheet";

const { TabPane } = Tabs;
const TimeLogPage = () => {
  return (
    <>
      <PageHeader
        className=" tabl site-page-header-responsive"
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
};
export default TimeLogPage;
