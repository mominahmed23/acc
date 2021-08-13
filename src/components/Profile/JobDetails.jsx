import React from "react";
import "./Profile.css";
import { Card, Col, Row } from "antd";
import { Typography, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
const { Text, Link } = Typography;
const JobDetails = () => {
  return (
    <>
      <div className="head site-card-wrapper mt-5 ">
        <h3>Job Details</h3>
        <div className="mt-5">
          <Row gutter={16}>
            <Col span={8}>
              <div className>
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>-</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Gender Name</Text>
                <br></br>
                <Text strong>Male</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Contact Number</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Brithday</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="head site-card-wrapper mt-5">
        <h3>Work Info</h3>
        <div className="mt-5">
          <Row gutter={16}>
            <Col span={8}>
              <div className>
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="head site-card-wrapper mt-5">
        <h3>Payement Info</h3>
        <div className="mt-5">
          <Row gutter={16}>
            <Col span={8}>
              <div className>
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Gender Name</Text>
                <br></br>
                <Text strong>Male</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>Ali Raza</Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
