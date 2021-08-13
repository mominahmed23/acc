import React from "react";
import { Menu, Typography } from "antd";
import {
  MailOutlined,
  CalendarOutlined,
  HomeOutlined,
  UserOutlined,
  UserSwitchOutlined,
  FieldTimeOutlined,
  FileTextOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
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
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserSwitchOutlined />}>
          <Link to="clients">Clients</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="4"
          icon={<FieldTimeOutlined />}
          title="Time Tracking"
        >
          <Menu.ItemGroup key="g1">
            <Menu.Item key="1">Time Logs</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        {/* {navigation.map((val, index) => (
          <Menu.Item key={index + 1} icon={<CalendarOutlined />}>
            <Link to={val.path}>{val.label}</Link>
          </Menu.Item>
        ))} */}
        <Menu.Item key="5" icon={<FileTextOutlined />}>
          <Link to="/documents">Documents</Link>
        </Menu.Item>
        <hr style={{ width: "220px" }} />
        <Menu.Item key="6" icon={<CalendarOutlined />}>
          <Link to="/payments"> My Payments</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<BellOutlined />}>
          <Link to="/notification"> Notifications(100)</Link>
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
