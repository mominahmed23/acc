import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "antd-css-utilities/utility.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import MyProfilePage from "./pages/MyProfile";
import TimeLogPage from "./pages/TimeLog";
import AccountSettingPage from "./pages/AccountSetting";
import DocumentPage from "./pages/Document";
import MyPaymentPage from "./pages/MyPayment";
import Notification from "./pages/Notification";
import ClientsPage from "./pages/Clients";
import Layout from "./components/Layout/index";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/profile" component={MyProfilePage} />
          <Route path="/accountsetting" component={AccountSettingPage} />
          <Route path="/timelog" component={TimeLogPage} />
          <Route path="/mypayments" component={MyPaymentPage} />
          <Route path="/Clients" component={ClientsPage} />
          <Route path="/documents" component={DocumentPage} />
          <Route path="/notification" component={Notification} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
