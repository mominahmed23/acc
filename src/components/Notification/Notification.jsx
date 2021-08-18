import { Card, Col, Row } from "antd";
import React from "react";
import { BellOutlined, SelectOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";

const aa = [
  {
    icon: <BellOutlined />,
    label: "Invoice has been paid",
    date: "05 Aug 2021 at 4:00pm",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Quibusdam corporis, nesciunt, laudantium minima cum",
    icon2: <SelectOutlined />,
  },
  {
    icon: <BellOutlined />,
    label: "Invoice Approved",
    date: "05 Aug 2021 at 4:00pm",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    icon2: <SelectOutlined />,
  },
  {
    icon: <BellOutlined />,
    label: "Time Sheet Approved",
    date: "05 Aug 2021 at 4:00pm",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Quibusdam corporis, nesciunt, laudantium minima cum",
    icon2: <SelectOutlined />,
  },
  {
    icon: <BellOutlined />,
    label: "Invoice Genrated",
    date: "05 Aug 2021 at 4:00pm",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit ",
    icon2: <SelectOutlined />,
  },
];
const Notification = () => {
  return (
    <>
      {aa.map((item) => (
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Card style={{ minHeight: "100px" }}>
              <Row>
                <Col xs={2} sm={2} md={2} lg={2}>
                  <Avatar size="large" icon={item.icon} />
                </Col>
                <Col xs={21} sm={21} md={21} lg={21}>
                  <Typography.Title level={5}>{item.label}</Typography.Title>
                  <p>{item.date}</p>
                  <p>{item.text}</p>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1}>
                  {item.icon2}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
};
export default Notification;
