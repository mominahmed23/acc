import React from "react";
import { CustomButton, CustomInput } from "../../common/CustomFormComponent";

const ReportPopup = () => {
  return (
    <div>
      <CustomInput Label={"status *"} />
      <CustomInput Label={"Start Date *"} />
      <CustomInput Label={"End Date *"} />
    </div>
  );
};

export default ReportPopup;
