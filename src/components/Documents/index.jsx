import React from 'react'
import { PageHeader } from "antd";
import { Tabs } from "antd";

import ContractorDocument from "./ContractorDocuments";

const { TabPane } = Tabs
const Documents = () => {
    return (
        <div className="px-5 py-5">
          <PageHeader
        ghost={false}
        className="site-page-header"
        title="Documents"
        subTitle=" "
       
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Contractor Documents" key="1">

<ContractorDocument/>           
             
            </TabPane>
          </Tabs>
        }
      />
    
        </div>
    )
}

export default Documents
