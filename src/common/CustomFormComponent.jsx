import React from "react";
import { Button, Input, Select, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
const { Text } = Typography;
export const CustomInput = (props) => {
  return (
    <div>
      <div>
        <label>{props.Label}</label>

        <Input {...props} />
      </div>
    </div>
  );
};
export const CustomSelect = (props) => {
  return (
    <div>
      <label>{props.Label}</label>
      <Select style={{ width: "100%" }} {...props} />
    </div>
  );
};

export const CustomTextarea = (props) => {
  return (
    <div>
      <label>{props.Label}</label>
      <TextArea {...props} />
    </div>
  );
};
export const CustomButton = (props) => {
  return (
    <div>
      <Button
        {...props}
        block
        style={{
          backgroundColor: "#b5050e",
          color: "white",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};
