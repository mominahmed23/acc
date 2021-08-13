import { Card, Col, Row } from "antd";
import { Typography, Space } from "antd";
import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";
import { EditOutlined } from "@ant-design/icons";
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
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
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
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
export default function Payment() {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <>
      <div className="main-container">
        <div>
          <Card className="card-container">
            <h3>Entity Details</h3>
            <div className="mt-5">
              <Row gutter={16}>
                <Col span={24}>
                  <div>
                    <Divider />

                    <Table
                      rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                      }}
                      columns={columns}
                      dataSource={data}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
