import React, { useState } from "react";
import { Card, Col, Input, Row } from "antd";
import { Typography, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import ClientPage from "../../pages/Clients";
import CustomCardInputs from "../../common/CustomCardInputs";
const { Text } = Typography;

const PerDetail = () => {
  const [disableState, setDisableState] = useState(true);
  const onEditCLick = () => {
    setDisableState(false);
    console.log(disableState);
  };

  const dataObj = {
    Gender: "male",
    contactNumber: "1234",
    addharNumber: "5678",
    Gender2: "male",
    contactNumber2: "1234",
    addharNumber2: "5678",
    Gender3: "male",
    contactNumber3: "1234",
    addharNumber3: "5678",
    
  };
  
  return (
    <div className="py-5">
      <Card className="mb-5">
        <h3>Personal Details</h3>
        <EditOutlined className="editicon" onClick={onEditCLick} />
        <div className="mt-5">
          <Row gutter={16}>
            <Col span={8}>
              <div>
                <Text type="secondary" className="ml-3">
                  Full Name
                </Text>
              </div>
              <div className="mb-8">
                <Input
                  className=""
                  type="text"
                  value="ALi Raza"
                  // defaultValue={"Ali Raza"}
                  bordered={false}
                  disabled={disableState}
                  onBlur={() => setDisableState(true)}
                ></Input>
                {/* <Text strong>Ali Raza</Text> */}
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
            </Col>
            <Col span={8}>
              <CustomCardInputs dataObj={dataObj} />
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

      <Card className="mb-5">
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

      <Card className="mb-5">
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

      <Card className="mb-5">
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
  );
};

export default PerDetail;
