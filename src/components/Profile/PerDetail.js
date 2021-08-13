import React from "react";
import "./Profile.css";
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
                  <div className="mt-8">
                    <Text type="secondary">Aadhaar Number</Text>
                    <br></br>
                    <Text strong>Ali Raza</Text>
                  </div>
                </Col>
                <Col span={8}>
                  <div className>
                    <Text type="secondary">Brithday</Text>
                    <br></br>
                    <Text strong>27th September 1995</Text>
                  </div>
                  <div className="mt-8">
                    <Text type="secondary">Alternate Contact Number</Text>
                    <br></br>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
        <div>
          <Card style={{ marginTop: "25px", marginLeft: "25px", width: "90%" }}>
            hello
          </Card>
        </div>
        <div>
          {" "}
          <Card style={{ marginTop: "25px", marginLeft: "25px", width: "90%" }}>
            hello
          </Card>
        </div>
      </div>
      {/* <div className="head site-card-wrapper mt-5 ">
       
      </div>

      <div
        style={{ position: "relative", backgroundColor: "#b1bdb4" }}
        className="site-card-wrapper mt-5"
      >
        <h3>Address Info</h3>
        <EditOutlined
          className="editicon"
          style={{ position: "absolute", top: "25px", right: "15px" }}
        />
        <div className="mt-5">
          <Row gutter={16}>
            <Col span={12}>
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
            <Col span={12}>
              <div className>
                <Text type="secondary">Gender Name</Text>
                <br></br>
                <Text strong>Male</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Contact Number</Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div
        style={{ position: "relative", backgroundColor: "#b1bdb4" }}
        className="site-card-wrapper mt-5"
      >
        <h3>Payment Info</h3>
        <EditOutlined
          style={{ position: "absolute", top: "25px", right: "15px" }}
        />
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
              <div className="mt-8">
                <Text type="secondary">Contact Number</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Brithday</Text>
                <br></br>
                <Text strong>27th September 1995</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Alternate Contact Number</Text>
                <br></br>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div
        style={{ position: "relative", backgroundColor: "#b1bdb4" }}
        className="site-card-wrapper mt-5"
      >
        <h3>Address Info</h3>
        <EditOutlined
          className="editicon"
          style={{ position: "absolute", top: "25px", right: "15px" }}
        />
        <div className="mt-5">
          <Row gutter={16}>
            <Col span={12}>
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
            <Col span={12}>
              <div className>
                <Text type="secondary">Gender Name</Text>
                <br></br>
                <Text strong>Male</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Contact Number</Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div
        style={{ position: "relative", backgroundColor: "#b1bdb4" }}
        className="site-card-wrapper mt-5"
      >
        <h3>Emergency Details</h3>
        <EditOutlined
          style={{ position: "absolute", top: "25px", right: "15px" }}
        />
        <div className="mt-5">
          <Row gutter={16}>
            <Col span={8}>
              <div className>
                <Text type="secondary">Full Name</Text>
                <br></br>
                <Text strong>--</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">Full Name</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Gender Name</Text>
                <br></br>
                <Text strong>Male</Text>
              </div>
              <div className="mt-8">
                <Text type="secondary">--</Text>
              </div>
            </Col>
            <Col span={8}>
              <div className>
                <Text type="secondary">Brithday</Text>
              </div>
            </Col>
          </Row>
        </div>
      </div> */}
    </>
  );
}

export default PerDetail;
