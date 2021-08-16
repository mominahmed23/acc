import { Card, Col, Row, Input } from "antd";
import { Typography, Space, button } from "antd";
import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";
import {
  EditOutlined,
  UserOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
const { Text, Link } = Typography;
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
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    //disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
export default function Client() {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <>
      <div className="px-5 py-10">
        <div>
          <Card style={{ backgroundColor: "#F0F0F0" }}>
            <Row>
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
              <div>
                {/* <Divider /> */}
                <Col lg={24} sm={24} xs={24} md={24}>
                  <Table
                    style={{ border: "1px solid" }}
                    rowSelection={{
                      type: selectionType,
                      ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                  />
                </Col>
              </div>
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
}
