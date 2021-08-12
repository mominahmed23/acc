import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import MyProfile from "./../pages/MyProfile";
import Layout from "./../components/Layout/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/profile" component={MyProfile} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
