import React from "react";
import {
  BellOutlined,
  CheckCircleTwoTone,
  PrinterOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Row, Col, Avatar, Space, Box, Card } from "antd";
import { Calendar, Select, Image } from "antd";
import { Text } from "antd/lib/typography/Text";
import { Line } from "@ant-design/charts";
const { Content } = Layout;

const Dashboard = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  return (
    <div className="px-5 py-5">
      <Row gutter={[12, 24]}>
        <Col xs={24} sm={24} md={24} lg={17}>
          <Typography.Title level={5}>Todo</Typography.Title>
          <Card style={{ minHeight: "400px" }}>
            <Row>
              <Col span={2}>
                <Avatar size="large" icon={<BellOutlined />} />
              </Col>
              <Col span={22}>
                <Typography.Title level={5}>
                  Invoice has been paid
                </Typography.Title>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam, corporis, nesciunt, laudantium minima cum dicta
                  dolores nobis consequatur maiores blanditiis ad autem incidunt
                  deleniti numquam atque sequi id earum omnis?
                </p>
                <Typography.Text>05 Aug 2021</Typography.Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} lg={7} md={24}>
          <Typography.Title level={5}>Time Log</Typography.Title>
          <Card style={{ minHeight: "400px" }}>
            <div>
              <Calendar
                fullscreen={false}
                minHeight="100px"
                headerRender={({ value, type, onChange, onTypeChange }) => {
                  const start = 0;
                  const end = 12;
                  const monthOptions = [];

                  const current = value.clone();
                  const localeData = value.localeData();
                  const months = [];
                  for (let i = 0; i < 12; i++) {
                    current.month(i);
                    months.push(localeData.monthsShort(current));
                  }

                  for (let index = start; index < end; index++) {
                    monthOptions.push(
                      <Select.Option className="month-item" key={`${index}`}>
                        {months[index]}
                      </Select.Option>
                    );
                  }
                  const month = value.month();

                  const year = value.year();
                  const options = [];
                  for (let i = year - 10; i < year + 10; i += 1) {
                    options.push(
                      <Select.Option key={i} value={i} className="year-item">
                        {i}
                      </Select.Option>
                    );
                  }
                  return (
                    <div style={{ padding: 8 }}>
                      <Typography.Title level={5}>text</Typography.Title>
                    </div>
                  );
                }}
                //onPanelChange={onPanelChange}
              />
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={17}>
          <Typography.Title level={5}>Payment</Typography.Title>
          <Card>
            <Line {...config} />;
          </Card>
        </Col>
        <Col md={24} xs={24} sm={24} lg={7}>
          <Typography.Title level={5}>InVoices</Typography.Title>
          <Card>
            <div>
              <PrinterOutlined className="mr-3" />
              Invoice have been paid
            </div>
            <hr></hr>
            <div>
              <PrinterOutlined className="mr-3" />
              Invoice have been paid
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
