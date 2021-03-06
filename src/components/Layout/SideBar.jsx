import React from "react";
import { Menu, Typography, Layout, Divider } from "antd";
import {
  CalendarOutlined,
  HomeOutlined,
  UserOutlined,
  UserSwitchOutlined,
  FieldTimeOutlined,
  FileTextOutlined,
  BellOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
import Text from "antd/lib/typography/Text";

const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider
      className="custom-nav"
      theme="light"
      width={250}
      breakpoint="md"
      collapsedWidth="0"
      style={{
        overflowX: "hidden",
        height: "100vh",
        position: "fixed",
        left: 0,
        borderRight: "1px solid #eeeeee",
      }}
    >
      <Typography.Title level={4} className="text-center mt-3">
        SKUAD
      </Typography.Title>
      <Menu mode="inline" defaultSelectedKeys={["4"]}>
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
            <Link to="timelog">
              <Menu.Item key="1">Time Logs</Menu.Item>
            </Link>
          </Menu.ItemGroup>
        </Menu.SubMenu>

        <Menu.Item key="5" icon={<FileTextOutlined />}>
          <Link to="/documents">Documents</Link>
        </Menu.Item>
        <Divider />
        <Menu.Item key="6" icon={<CalendarOutlined />}>
          <Link to="/mypayments"> My Payments</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<BellOutlined />}>
          <Link to="/notification"> Notifications(100)</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<CalendarOutlined />}>
          <Link to="/accountsetting">Account Settings</Link>
        </Menu.Item>

        {/* <Menu.Item>
          {" "}
          <Avatar>RJ</Avatar>
          <Text>Rishab Jain</Text>
          <HomeOutlined />
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default SideBar;
