import React from "react";
import { PageHeader , Tabs  } from "antd";
import PersonalDetails from "./../components/Profile/PersonalDetails";
import JobDetails from "./../components/Profile/JobDetails";
import "./../components/Profile/Profile.css";
import Text from "antd/lib/typography/Text";
const { TabPane } = Tabs;


const a = {
  // src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
  size: "large",
  title: "RJ",
  Text: "RJ",
  alt: "RJ",
};
const MyProfilePage = () => {
  return (
    <>
      <PageHeader
        ghost={false}
        className="site-page-header"
        title="Rishab Jain"
        avatar={a}
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

export default MyProfilePage;
