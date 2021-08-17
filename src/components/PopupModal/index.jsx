import Modal from "antd/lib/modal/Modal";
import React, { Children } from "react";

const PopupModal = ({ isModalVisible, children, title, handleCencel }) => {
  return (
    <>
      <Modal
        centered
        title={title}
        closable={true}
        visible={isModalVisible}
        onCancel={handleCencel}
        footer={null}
      >
        <div>{children}</div>
      </Modal>
    </>
  );
};

export default PopupModal;
