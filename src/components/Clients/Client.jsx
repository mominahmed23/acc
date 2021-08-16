import { Card, Col, Row, Input } from "antd";
import React, { useState } from "react";
import {
  UserOutlined,
  DeleteOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Table, Avatar } from "antd";

const { Column } = Table;

export default function Client() {
  const [selectionType, setSelectionType] = useState("checkbox");
  const data = [
    {
      key: "1",
      firstName: (
        <Avatar
          style={{
            backgroundColor: "#87d068",
          }}
          icon={<UserOutlined />}
        />
      ),
      lastName: "Brown",
      age: 32,
      address: <DeleteOutlined />,
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "ALi",
      lastName: "Green",
      age: 42,
      address: <DeleteOutlined />,
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Ali Raza",
      lastName: "Black",
      age: 32,
      address: <DeleteOutlined />,
      tags: ["cool", "teacher"],
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

          <Col lg={24} sm={24} xs={24} md={24}>
            <Table dataSource={data} pagination={false}>
              <Column
                width="30%"
                align="left"
                title="Clients"
                dataIndex="firstName"
                key="firstName"
              />
              <Column
                width="20%"
                align="center"
                title="Content Name"
                dataIndex="lastName"
                key="lastName"
              />
              <Column
                width="20%"
                align="center"
                title="Contect Type"
                dataIndex="age"
                key="age"
              />
              <Column
                width="20%"
                align="center"
                title="Status"
                dataIndex="age"
                key="age"
              />
              <Column
                width="20%"
                align="right"
                title="--"
                dataIndex="address"
                key="address"
              />
            </Table>
          </Col>
        </Row>
      </Card>
    </>
  );
}
