import "./App.less";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "antd-css-utilities/utility.min.css";
import { Button , Typography } from "antd";
import Routes from "./routes";

function App() {
  return (
    <>
      <Typography.Text type="success">Customization</Typography.Text>
      <Button type='primary'>jjj</Button><br></br>
      <Typography.Text type="danger">Not Customization</Typography.Text>
      <Button danger>jjj</Button>
    </>
  );
}

export default App;
