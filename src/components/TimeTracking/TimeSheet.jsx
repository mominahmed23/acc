import { Button, Select, Col, Row } from "antd";
import { Table } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import {
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "../../common/CustomFormComponent";
import React from "react";
import {
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const { Column } = Table;

export default function TimeSheet() {
  const data = [
    {
      key: "1",
      lastName: <PlusOutlined />,
    },
    {
      key: "2",
      firstName: "12 aug 2021 Friday",
      lastName: <CustomSelect placeholder="Select" items={["ali", "asad"]} />,
      age: <CustomTextarea Label="." />,
      address: <DeleteOutlined />,
      tag: (
        <CustomInput
          disabled
          placeholder="Hours"
          name={"date"}
          value={"Hours"}
        />
      ),
    },
    {
      key: "3",
      lastName: <PlusOutlined />,
    },
    {
      key: "4",
      firstName: "Brown",
      lastName: <CustomSelect placeholder="Select" items={["ali", "asad"]} />,
      age: <CustomTextarea Label="." />,
      address: <DeleteOutlined />,
      tag: (
        <CustomInput
          disabled
          placeholder="Hours"
          name={"date"}
          value={"Hours"}
        />
      ),
    },
  ];

  return (
    <div>
      {/* <div className="d-flex align-center justify-space-between my-4"> */}
      <Row>
        <Col lg={10} xs={10} md={10} sm={10}>
          <div>
            <Select
              style={{ width: 200, borderRadius: "70px" }}
              placeholder="Select a person"
              optionFilterProp="children"
            >
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="tom">Tom</Select.Option>
            </Select>
          </div>
        </Col>
        <Col lg={11} xs={11} md={11} sm={11}>
          <div className="d-flex align-center">
            <Avatar icon={<LeftOutlined />}></Avatar>
            <h3 className="mx-5">Aug 5,21 - Aug 5,21</h3>
            <Avatar icon={<RightOutlined />}></Avatar>
          </div>
        </Col>
        <Col lg={3} xs={3} md={3} sm={3}>
          <div>
            <Button style={{ color: "red" }}>Current Week</Button>
          </div>
        </Col>
      </Row>
      <br></br>
      {/* <div>
          <Select
            style={{ width: 200 , borderRadius:'70px' }}
            placeholder="Select a person"
            optionFilterProp="children"
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="tom">Tom</Select.Option>
          </Select>
        </div>
        <div className="d-flex align-center">
          <Avatar icon={<LeftOutlined />}></Avatar>
          <h3 className="mx-5">Aug 5,21 - Aug 5,21</h3>
          <Avatar icon={<RightOutlined />}></Avatar>
        </div>
        <div>
          <Button style={{ color: "red" }}>Current Week</Button>
        </div> */}
      {/* </div> */}

      <Table dataSource={data} pagination={false}>
        <Column
          width="15%"
          align="left"
          title="Date"
          dataIndex="firstName"
          key="firstName"
        ></Column>
        <Column
          width="25%"
          align="center"
          title="Project"
          dataIndex="lastName"
          key="lastName"
        />
        <Column
          width="40%"
          align="center"
          title="Text Details"
          dataIndex="age"
          key="age"
        />
        <Column
          width="12%"
          align="center"
          title="Working Hours"
          dataIndex="tag"
          key="tag"
        />
        <Column
          width="15%"
          align="center"
          title="--"
          dataIndex="address"
          key="address"
        />
      </Table>
    </div>
  );
}
