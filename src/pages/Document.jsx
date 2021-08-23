import React from 'react'
import ContractorDocument from "./../components/Documents/ContractorDocuments";
import { PageHeader, Tabs  } from "antd";
const { TabPane } = Tabs;
const DocumentsPage = () => {
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
    )
}

export default DocumentsPage




