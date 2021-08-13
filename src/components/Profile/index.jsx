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
        avatar={{}}
        style={{ backgroundColor: "white" }}
        footer={
          <Tabs defaultActiveKey="1" style={{ backgroundColor: "white" }}>
            <TabPane
              tab="Personal Details"
              key="1"
              style={{ backgroundColor: "#ece8e8" }}
            >
              {<PersonalDetails />}
            </TabPane>
            <TabPane
              tab="Job Details"
              key="2"
              style={{ backgroundColor: "#ece8e8" }}
            >
              <JobDetails />
            </TabPane>
          </Tabs>
        }
      >
        {/* <div>
          <Avatar>RJ</Avatar>
        </div> */}
        <div className="sub-heading">
          <Text strong>Consultant | Contractor</Text>
        </div>
      </PageHeader>
    </>
  );
};

export default Profile;
