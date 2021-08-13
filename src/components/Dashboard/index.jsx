import React from "react";
import { BellOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { Layout, Typography, Row, Col, Avatar, Space, Box, Card } from "antd";
import { Calendar, Select, Image } from "antd";
import { Text } from "antd/lib/typography/Text";
const { Content } = Layout;

const Dashboard = () => {
  return (
    <>
      <Row gutter={[12, 24]}>
        <Col xs={24} sm={24} md={24} lg={17}>
          <Typography.Title level={5}>Todo</Typography.Title>
          <Card>
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
            {/* <div className="d-flex">
                <Space style={{ display: "inline-flex" }}>
                  <Avatar
                    style={{ top: "-33px" }}
                    size="large"
                    icon={<BellOutlined />}
                  />
                  <span>
                    <Title level={5}>Invoice has been paid </Title>
                    <span>
                      Invoice has been paidInvoice has been paidInvoice has been
                      paidInvoice has been paid
                    </span>
                    <br />
                    <br />
                    12 Aug 2021
                  </span>
                </Space>
              </div> */}
          </Card>
        </Col>
        <Col xs={24} sm={24} lg={7} md={24}>
          <Typography.Title level={5}>Time Log</Typography.Title>
          <Card>
            hello time log
            {/* <div>
                <Calendar
                  fullscreen={false}
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
              </div> */}
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={17}>
          <Typography.Title level={5}>Payment</Typography.Title>
          <Card>
            graph
            {/* <Image
              width="52vw"
              height="26.6vh"
              src="data:image/jpeg;base64,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"
            /> */}
          </Card>
        </Col>
        <Col md={24} xs={24} sm={24} lg={7}>
          <Typography.Title level={5}>InVoices</Typography.Title>
          <Card>
            Invoives
            {/* <div>
              <Space style={{ marginLeft: "1vw", marginTop: "2vw" }}>
                <CheckCircleTwoTone />

                <Typography.Title level={5}>
                  Invoice has been paid{" "}
                </Typography.Title>
              </Space>
              <hr style={{ opacity: "0.2", marginLeft: "1.8vw" }} />
              <div>
                <Space style={{ marginLeft: "1vw", marginTop: "2vw" }}>
                  <CheckCircleTwoTone />

                  <Typography.Title level={5}>
                    Invoice has been paid{" "}
                  </Typography.Title>
                </Space>
              </div>
            </div> */}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
