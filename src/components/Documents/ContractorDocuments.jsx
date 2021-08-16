import { Card, Col, Collapse, Row, Typography } from "antd";
import React from "react";
import {PlusOutlined} from "@ant-design/icons";
const { Panel } = Collapse;
const ContractorDocuments = () => {
  return (
    <>
    <div className="d-flex align-end"  style={{backgroundColor:'#bdb7b7'}}>
      <PlusOutlined
       />
      </div>
      <Row>
      
        <Col xs={24} sm={24} md={24} lg={24}>
          <Collapse  expandIconPosition="right">
            <Panel header={<Typography.Title level={5}>Consultant Agreement</Typography.Title>} key="1">
              <div>No documents Found</div>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Collapse  expandIconPosition="right">
            <Panel header={<Typography.Title level={5}>KYC</Typography.Title>} key="1">
              <div></div>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Collapse  expandIconPosition="right">
            <Panel header={<Typography.Title level={5}>Others</Typography.Title>} key="1">
              <div>No documents Found</div>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

export default ContractorDocuments;
