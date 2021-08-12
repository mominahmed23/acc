import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import LayoutPage from "./LayoutPage";
const { Header, Content, Sider } = Layout;
export default function Homepage() {
  return (
    <div>
      <LayoutPage>{"hello"}</LayoutPage>
    </div>
  );
}
