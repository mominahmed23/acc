import React from "react";
import { PageHeader } from "antd";
import { Tabs } from "antd";

import ContractorDocument from "./ContractorDocuments";

const { TabPane } = Tabs;
const Documents = () => {
  return (
    <>
      <PageHeader
        style={{ minHeight: "400px" }}
        ghost={false}
        className="site-page-header"
        title="Documents"
        subTitle=" "
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Contractor Documents" key="1">
              <ContractorDocument />
            </TabPane>
          </Tabs>
        }
      />
    </>
  );
};

export default Documents;
