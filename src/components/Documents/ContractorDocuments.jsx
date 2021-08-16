import { Alert, Card, Col, Collapse, Row, Typography } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useState } from "react";
const { Panel } = Collapse;
const ContractorDocuments = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const columns = [
    {
      title: "Client",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Invoice",
      dataIndex: "age",
    },
    {
      title: "Invoice Date",
      dataIndex: "address",
    },
    {
      title: "Amount",
      dataIndex: "address",
    },
    {
      title: "Paid Amount",
      dataIndex: "address",
    },
    {
      title: "Status",
      dataIndex: "address",
    },
    {
      title: "---",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "Ali Raza",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Ali Raza",
      age: 42,
      address: "London No. 1 Lake Park",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };
  return (
    <>
      <div
        className="d-flex justify-end my-3 mx-5"
        //style={{backgroundColor:'#bdb7b7'}}
      >
        <PlusOutlined />
      </div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Collapse expandIconPosition="right">
            <Panel
              header={
                <Typography.Title level={5}>
                  Consultant Agreement
                </Typography.Title>
              }
              key="1"
            >
              <div>No documents Found</div>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Collapse expandIconPosition="right">
            <Panel
              header={<Typography.Title level={5}>KYC</Typography.Title>}
              key="1"
              extra={
                <Alert message="Informational Notes" type="info" showIcon />
              }
            >
              <Table pagination={false} columns={columns} dataSource={data} />
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Collapse expandIconPosition="right">
            <Panel
              header={<Typography.Title level={5}>Others</Typography.Title>}
              key="1"
            >
              <div>No documents Found</div>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

export default ContractorDocuments;
