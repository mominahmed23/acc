import Text from "antd/lib/typography/Text";
import React from "react";
import { CustomInputCard } from "./CustomFormComponent";

const CusomCardInputEnabled = ({ dataObj }) => {
  const dataEntries = Object.entries(dataObj);
  return (
    <div>
      {dataEntries.map((item) => (
        <div>
          <div>
            <Text type="secondary">{item[0]}</Text>
          </div>
          <div className="mr-7" style={{ marginLeft: "-10px" }}>
            <CustomInputCard value={item[1]} name={item[0]} width={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CusomCardInputEnabled;
