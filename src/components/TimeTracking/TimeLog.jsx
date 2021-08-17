import React from "react";
import { Button, Col, Input, Row, Select, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "../../common/CustomFormComponent";
export default function TimeLog() {
  return (
    <div className="px-2 py-3">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Typography.Title level={5}>Add Time Log</Typography.Title>
        </Col>
        <Col xs={24} md={24} lg={12}>
          {" "}
          <CustomSelect Label={"Clients *"} items={["ali", "asad"]} />
        </Col>
        <Col xs={24} md={24} lg={12}>
          <CustomSelect Label={"Project *"} items={["ali", "asad"]} />
        </Col>
        <Col xs={24} md={24} lg={12}>
          {" "}
          <CustomInput
            disabled
            Label={"Select Date *"}
            placeholder="Select Date"
          />
        </Col>
        {/* {" "}
          <label>Select Date *</label>
          <Input disabled placeholder="Select Date" /> */}
        <Col xs={24} md={24} lg={12}>
          {" "}
          {/* <label> Time(Hours) *</label>
          <Input /> */}
          <CustomInput Label={"Time(Hours)"} />
        </Col>
        <Col xs={24} md={24} sm={24} lg={24}>
          <CustomTextarea Label={"Task Details *"} />
        </Col>
        <Col xs={24} md={24} sm={24} lg={4}>
          <CustomButton BgColor={"#c21807"} Color={"white"}>
            SAVE
          </CustomButton>
        </Col>
      </Row>
    </div>
  );
}
