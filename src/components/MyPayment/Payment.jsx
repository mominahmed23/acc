import React, { useState } from "react";
import { Card, Col, Row, Input } from "antd";
import { Table } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

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
  {
    key: "3",
    name: "Ali Raza",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Ali Raza",
    age: 99,
    address: "Sidney No. 1 Lake Park",
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
export default function Payment() {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <>
      <Row>
        <Card style={{ backgroundColor: "#F0F0F0" }}>
          <Col lg={24} sm={24} xs={24} md={24}>
            <div className="mb-5 topheader">
              <Input
                className="searchh"
                placeholder="Search"
                prefix={<SearchOutlined />}
              />
              <FilterOutlined />
            </div>
          </Col>

          <Col lg={24} sm={24} xs={24} md={24}>
            <Table
              pagination={false}
              style={{ border: "1px solid" }}
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
            />
          </Col>
        </Card>
      </Row>
    </>
  );
}
