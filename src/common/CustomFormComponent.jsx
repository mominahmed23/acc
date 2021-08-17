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
  const { items } = props;
  return (
    <div>
      <label>{props.Label}</label>
      <Select style={{ width: "100%" }}>
        {items.map((i) => (
          <Select.Option value={i} />
        ))}
      </Select>
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
  const { BgColor, Color } = props;
  return (
    <div>
      <Button
        {...props}
        block
        style={{
          backgroundColor: `${BgColor}`,
          color: `${Color}`,
          borderRadius: "5px",
        }}
      />
    </div>
  );
};
