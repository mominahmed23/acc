import React from "react";
import { Button, Input, Select, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
const { Text } = Typography;
export const CustomInput = (props) => {
  const { Label, ...rest } = props;
  console.log("testingg", rest);
  return (
    <div>
      <div>
        <label>{Label}</label>

        <Input {...props} handleBlur={() => console.log("blur")} />
      </div>
    </div>
  );
};
export const CustomInputCard = (props) => {
  return (
    <div>
      <div>
        <label className="ml-2">{props.Label}</label>
        <Input {...props} />
      </div>
    </div>
  );
};
export const CustomSelect = (props) => {
  const { Label, items } = props;

  return (
    <div>
      <label>{Label}</label>
      <Select placeholder={props.placeholder} style={{ width: "100%" }}>
        {items.map((i) => (
          <Select.Option value={i} />
        ))}
      </Select>
    </div>
  );
};

export const CustomTextarea = (props) => {
  const { Label, ...rest } = props;
  return (
    <div>
      <label>{Label}</label>
      <TextArea {...rest} />
    </div>
  );
};
export const CustomButton = (props) => {
  const { BgColor, Color, ...rest } = props;
  return (
    <div>
      <Button
        {...rest}
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
