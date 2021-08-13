import React from "react";
import { Card, Col, Row } from "antd";
import { Typography, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
const { Text, Link } = Typography;

function PerDetail() {
  return (
    <>
      <div className="main-container">
        <div>
          <Card className="card-container">
            <h3>Personal Details</h3>
            <EditOutlined className="editicon" />
            <div className="mt-5">
              <Row gutter={16}>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Full Name</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                    <div>
                      <Text type="secondary">Full Name</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                    <div>
                      <Text type="secondary">Full Name</Text>
                    </div>
                    <div className="mb-4">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Gender</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Male</Text>
                    </div>
                    <div>
                      <Text type="secondary">Contact Number</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                    <div>
                      <Text type="secondary">Adhaar Number</Text>
                    </div>
                    <div className="mb-4">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Birthday</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>A27 spetember </Text>
                    </div>
                    <div>
                      <Text type="secondary">Alternate COntact Number</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        <div>
          <Card className="card-container">
            <h3>Address Info</h3>
            <EditOutlined className="editicon" />
            <div className="mt-5">
              <Row gutter={16}>
                <Col span={12}>
                  <div>
                    <div>
                      <Text type="secondary">Full Name</Text>
                    </div>
                    <div className="mb-4">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div>
                    <div>
                      <Text type="secondary">Adhaar Number</Text>
                    </div>
                    <div className="mb-4">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        <div>
          <Card className="card-container">
            <h3>Payment Info</h3>
            <EditOutlined className="editicon" />
            <div className="mt-5">
              <Row gutter={16}>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Full Name</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                    <div>
                      <Text type="secondary">Full Name</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Contact Number</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                    <div>
                      <Text type="secondary">Adhaar Number</Text>
                    </div>
                    <div className="mb-4">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Birthday</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>A27 spetember </Text>
                    </div>
                    <div>
                      <Text type="secondary">Alternate COntact Number</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>

        <div>
          <Card className="card-container">
            <h3>Emergency Details</h3>
            <EditOutlined className="editicon" />
            <div className="mt-5">
              <Row gutter={16}>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Full Name</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                    <div>
                      <Text type="secondary">Full Name</Text>
                    </div>
                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Adhaar Number</Text>
                    </div>
                    <div className="mb-4">
                      <Text strong>Ali Raza</Text>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <div>
                      <Text type="secondary">Birthday</Text>
                    </div>

                    <div className="mb-8">
                      <Text strong>Ali Raza</Text>
                    </div>
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

export default PerDetail;
