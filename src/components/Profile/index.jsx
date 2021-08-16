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
        ghost={false}
        className="site-page-header"
        title="Rishab Jain"
        avatar={{
          // src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
          size: "large",
          title: "RJ",
          Text: "RJ",
          alt: "RJ",
        }}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Details" key="1">
              <PersonalDetails />
            </TabPane>
            <TabPane tab="Job Details" key="2">
              <JobDetails />
            </TabPane>
          </Tabs>
        }
      >
        <div className="sub-heading">
          <Text type="strong">Contructor | Consultant</Text>
        </div>
      </PageHeader>
    </>
  );
};

export default Profile;
