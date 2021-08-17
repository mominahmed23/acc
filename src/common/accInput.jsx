import React from "react";
import { Input, Typography } from "antd";
const { Text } = Typography;
export const AccInput = () => {
  return (
    <div>
      <Text type="secondary mb-2">
        Ant (Design)<span style={{ color: "red" }}>*</span>
      </Text>

      <Input style={{ marginTop: "5px" }} placeholder="Basic usage" />
    </div>
  );
};
