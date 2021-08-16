import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import MyProfile from "./../pages/MyProfile";
import TimeLog from "../pages/PageTimeLog";
import AccountSetting from "./../pages/AccountSetting";
import MyPayment from "./../pages/MyPayment";
import Clients from "./../pages/Clients";
import Layout from "./../components/Layout/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/profile" component={MyProfile} />
          <Route path="/accountsetting" component={AccountSetting} />
          <Route path="/timelog" component={TimeLog} />
          <Route path="/mypayments" component={MyPayment} />
          <Route path="/Clients" component={Clients} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
