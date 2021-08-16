import { Button, Select, Col, Row } from "antd";
import { Table } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import {
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  DownOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Column } = Table;

export default function TimeSheet() {
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
    <div>
      <div className="d-flex align-center justify-space-between my-4">
        <div>
          <Select
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="tom">Tom</Select.Option>
          </Select>
        </div>
        <div className="d-flex">
          <Avatar icon={<LeftOutlined />}></Avatar>
          <h3 className="mx-5">time sheet</h3>
          <Avatar icon={<RightOutlined />}></Avatar>
        </div>
        <div>
          <Button style={{ color: "red" }}>Current Week</Button>
        </div>
      </div>

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
    </div>
  );
}
