import {
  Card,
  Col,
  Divider,
  Row,
  Table,
  Typography,
  Button,
  Input,
} from "antd";
import { CustomInput } from "../../common/CustomFormComponent";
import { EditOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import React, { useState } from "react";
const { Column } = Table;

export default function PaymentInvoice({ handleClick }) {
  const [inputState, setInputState] = useState(true);
  const [hsnData, sethsnData] = useState("8");

  return (
    <>
      <Card>
        <Row>
          {/* <Col xs={24} sm={24} md={24} lg={24}>
      <DoubleLeftOutlined onClick={() => handleClick(true)}></DoubleLeftOutlined> 
        </Col> */}
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className="d-flex">
              <Typography.Title level={5}>In&nbsp;voice:21</Typography.Title>
              &nbsp;&nbsp;
              <Typography.Text type="secondary">
                (1&nbsp;Feb,&nbsp;2010&nbsp;-&nbsp;10&nbsp;Feb,&nbsp;2010)
              </Typography.Text>
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="d-flex flex-column ">
              <Typography.Text>For:</Typography.Text>
              <Typography.Text>Coderation.io</Typography.Text>
              <Typography.Text>
                Unit no 123-456, Tower xzy abc sector 123
              </Typography.Text>
              <Typography.Text>xyz punjab, 123456 india</Typography.Text>
              <Typography.Text>123446777XYZ</Typography.Text>
              <Typography.Text>abcd1234XY</Typography.Text>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} className="mt-3">
            <div className="d-flex flex-column align-end">
              <Typography.Text>Invoice Date: 28th July2021</Typography.Text>
              <Typography.Text>Due Date: 12th August 2021</Typography.Text>
              <Typography.Text>From:</Typography.Text>
              <Typography.Text>john Smith</Typography.Text>
              <Typography.Text>ABC Colony # 1234 XYZ Road</Typography.Text>
              <Typography.Text>Chandigarh Punjab</Typography.Text>
              <Typography.Text>123456</Typography.Text>
              <Typography.Text>PAN: abcd123456</Typography.Text>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            className="py-2 d-flex flex-column"
          >
            <Card>
              <div className="d-flex justify-space-around align-items-center">
                <Typography.Text>Description</Typography.Text>
                <Typography.Text>
                  HSN <EditOutlined onClick={() => setInputState(false)} />
                </Typography.Text>
                <Typography.Text>Quantity</Typography.Text>
                <Typography.Text>Rate</Typography.Text>
                <Typography.Text>Amount</Typography.Text>
                <Typography.Text>Taxable</Typography.Text>
              </div>
              <div className="d-flex justify-space-between ">
                <Typography.Text>Software Consulting</Typography.Text>
                <Typography.Text>
                  {inputState ? (
                    hsnData
                  ) : (
                    <CustomInput
                      onBlur={(e) => {
                        setInputState(true);
                        sethsnData(e.target.value);
                      }}
                    />
                  )}
                </Typography.Text>
                <Typography.Text>80.05</Typography.Text>
                <Typography.Text>INR 1.23 PER HOUR</Typography.Text>
                <Typography.Text>INR 1233'</Typography.Text>
                <Typography.Text>Taxable'</Typography.Text>
              </div>
            </Card>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className="d-flex flex-row justify-space-between"
          >
            <div className="d-flex flex-column">
              <Typography.Title level={5}>Payment Info</Typography.Title>
              <Typography.Text>Account Holder</Typography.Text>
              <Typography.Text>Bank Name</Typography.Text>
              <Typography.Text>Account Num</Typography.Text>
              <Typography.Text>Account Type</Typography.Text>
              <Typography.Text>Swift Code</Typography.Text>
            </div>
            <div className="d-flex flex-column ">
              <Typography.Title level={5}>&nbsp;</Typography.Title>
              <Typography.Text type="secondary">John Smith</Typography.Text>
              <Typography.Text type="secondary">ABCD Bank</Typography.Text>
              <Typography.Text type="secondary">123456789que</Typography.Text>
              <Typography.Text type="secondary">Current</Typography.Text>
              <Typography.Text type="secondary">abcd122345</Typography.Text>
            </div>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 12, offset: 4 }}
            className="d-flex flex-column"
          >
            <Typography.Text>
              <hr />
            </Typography.Text>
            <div className="d-flex flex-row justify-space-between">
              <div className="d-flex flex-column">
                <Typography.Text type="secondary">Total Amount</Typography.Text>
                <Typography.Text type="secondary">
                  Taxable Amount
                </Typography.Text>
              </div>
              <div className="d-flex flex-column">
                <Typography.Text>INR 16678</Typography.Text>
                <Typography.Text>INR 16678</Typography.Text>
              </div>
            </div>
            <Typography.Text>
              <hr />
            </Typography.Text>
            <div className="d-flex flex-row justify-space-between">
              <div className="d-flex flex-column">
                <Typography.Text type="secondary">Tax(%)</Typography.Text>
                <Typography.Text type="secondary">Tax</Typography.Text>
              </div>
              <div className="d-flex flex-column">
                <Typography.Text>INR 16678</Typography.Text>
                <Typography.Text>INR 16678</Typography.Text>
              </div>
            </div>
            <Typography.Text>
              <hr />
            </Typography.Text>
            <div className="d-flex flex-row justify-space-between">
              <div className="d-flex flex-column">
                <Typography.Text type="secondary">Tax Total</Typography.Text>
              </div>
              <div className="d-flex flex-column">
                <Typography.Text>0%</Typography.Text>
              </div>
            </div>
            <Typography.Text>
              <hr />
            </Typography.Text>
            <div className="d-flex flex-row justify-space-between">
              <div className="d-flex flex-column">
                <Typography.Text>Amount Due</Typography.Text>
              </div>
              <div className="d-flex flex-column">
                <Typography.Text>INR 16678</Typography.Text>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
