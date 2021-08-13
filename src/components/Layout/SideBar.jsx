import React from "react";
import { Menu, Typography } from "antd";
import { MailOutlined, CalendarOutlined } from "@ant-design/icons";
import { navigation } from "./../../utils/navigation";
import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
import { ArrowRightOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
const SideBar = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div
      className="py-3"
      style={{
        width: "260px",
        flexShrink: "0",
        position: "static",
        maxHeight: "100%",
      }}
    >
      <Typography.Title level={4} className="text-center">
        SKUAD
      </Typography.Title>

      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        maxHeight="100vh"
      >
        {navigation.map((val, index) => (
          <Menu.Item key={index + 1} icon={<CalendarOutlined />}>
            <Link to={val.path}>{val.label}</Link>
          </Menu.Item>
        ))}

        <Menu.SubMenu key="4" icon={<MailOutlined />} title="Time Tracking">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item key="5" icon={<CalendarOutlined />}>
          Documents
        </Menu.Item>
        <hr style={{ width: "220px" }} />
        <Menu.Item key="6" icon={<CalendarOutlined />}>
          My Payments
        </Menu.Item>
        <Menu.Item key="7" icon={<CalendarOutlined />}>
          Notifications(100)
        </Menu.Item>
        <Menu.Item key="8" icon={<CalendarOutlined />}>
          <Link to="/accountsetting">Account Settings</Link>
        </Menu.Item>
        <div className="d-flex side-bar-logo">
          <div>
            <Avatar style={{ color: "#ffffff", backgroundColor: "#dcdc56" }}>
              RJ
            </Avatar>
          </div>
          <div className="side-bar-logo-text">
            <Text>Rishabh Jain</Text>
          </div>
          <div className="side-bar-logo-button">
            <ArrowRightOutlined />
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default SideBar;
