import { Layout } from "antd";
import CustomSidebar from "./SideBar";

const CustomLayout = ({ children }) => {
  return (
    <Layout>
      <CustomSidebar />
      <Layout style={{ marginLeft: 260 }}>
        <Layout.Content style={{ minHeight: 360 }}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
