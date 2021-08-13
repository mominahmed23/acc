import { PageHeader } from "antd";
import React from "react";
import { Tabs } from "antd";
import PersonalDetails from "./PersonalDetails";
import JobDetails from "./JobDetails";
import "./Profile.css";
const { TabPane } = Tabs;
const Profile = () => {
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="Rishabh Jain"
        avatar={
          "RJ"
          //     {
          //   src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
          // }
        }
        subTitle="This is a subtitle"
        style={{ backgroundColor: "white" }}
      ></PageHeader>
      <Tabs defaultActiveKey="1" style={{ backgroundColor: "white" }}>
        <TabPane
          tab="Personal Details"
          key="1"
          style={{ backgroundColor: "#ece8e8", marginLeft: "10px" }}
        >
          {<PersonalDetails />}
        </TabPane>
        <TabPane tab="Job Details" key="2" style={{ backgroundColor: "gray" }}>
          <JobDetails />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Profile;
