import React from "react";
import Text from "antd/lib/typography/Text";
const CustomCardInputs = ({ dataObj }) => {
  const dataEntries = Object.entries(dataObj);
  return (
    <div>
      {dataEntries.map((item) => (
        <>
          <div>
            <Text type="secondary">{item[0]}</Text>
          </div>
          <div className="mb-8">
            <Text strong>{item[1]}</Text>
          </div>
        </>
      ))}
    </div>
  );
};

export default CustomCardInputs;
