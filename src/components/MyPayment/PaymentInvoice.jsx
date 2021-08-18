import { Col, Row, Table, Typography } from "antd";

import React, { useState } from "react";

export default function PaymentInvoice() {
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
      <Row className="px-5 py-1">
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="d-flex">
            {" "}
            <Typography.Title level={5}>In&nbsp;voice:21</Typography.Title>
            &nbsp;&nbsp;
            <Typography.Text>(1&nbsp;Feb,&nbsp;2010&nbsp;-&nbsp;10&nbsp;Feb,&nbsp;2010)</Typography.Text>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={18}>
          <div className="d-flex flex-column">
            <Typography.Title level={5}>For:</Typography.Title>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} className="d-flex justify-end">
          <div className="d-flex flex-column">
            <Typography.Title level={5}>For:</Typography.Title>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
          </div>
        </Col>
        <Col xs={24} sm={24} md={22} lg={22}>
          <div className="d-flex justify-center ml-5">
            <Table
              style={{ border: "1px solid #808080" }}
              pagination={false}
              columns={columns}
              dataSource={data}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="d-flex flex-column">
            <Typography.Title level={5}>For:</Typography.Title>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="d-flex flex-column">
            <Typography.Text>
              {" "}
              <hr />
              (1 Feb, 2010 - 10 Feb, 2010)
            </Typography.Text>
            <Typography.Text>
              (1 Feb, 2010 - 10 Feb, 2010) <hr />
              <hr />
            </Typography.Text>

            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
            <Typography.Text>
              (1 Feb, 2010 - 10 Feb, 2010) <hr />
            </Typography.Text>

            <Typography.Text>(1 Feb, 2010 - 10 Feb, 2010)</Typography.Text>
          </div>
        </Col>
      </Row>
    </>
  );
}
