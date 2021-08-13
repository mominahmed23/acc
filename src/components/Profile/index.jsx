import { PageHeader } from "antd";
import React from "react";
import { Tabs } from "antd";
import PersonalDetails from "./PersonalDetails";
import JobDetails from "./JobDetails";
import "./Profile.css";
import Avatar from "antd/lib/avatar/avatar";
import Text from "antd/lib/typography/Text";
const { TabPane } = Tabs;
const Profile = () => {
  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        title="Rishabh Jain"
        avatar={{
          src: "RJ",
        }}
        // "RJ"
        //     {
        //   src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        // }

        style={{ backgroundColor: "white" }}
      >
        {/* <Avatar /> */}
        <div className="sub-heading">
          <Text strong>Consultant | Contractor</Text>
        </div>
      </PageHeader>
      <Tabs defaultActiveKey="1" style={{ backgroundColor: "white" }}>
        <TabPane tab="Personal Details" key="1">
          {<PersonalDetails />}
        </TabPane>
        <TabPane tab="Job Details" key="2">
          <JobDetails />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Profile;
