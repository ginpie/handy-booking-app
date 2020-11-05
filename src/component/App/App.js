import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from "../protectedRoute";
import HomePage from "../HomePage";
import JoinUsPage from "../JoinUs";
import ContactUsPage from "../ContactUs";
import ServiceDetailPage from "../ServiceDetail";
import UserProfilePage from "../UserProfile";
import { Authentication } from "../withAuthentication";
function App() {
  return (
    <Authentication>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/join-us" component={JoinUsPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/service" component={ServiceDetailPage} />
          <ProtectedRoute path="/user-profile" component={UserProfilePage} />
          <Route
            path="/cleaning"
            render={(props) => (
              <ServiceDetailPage {...props} serviceType="cleaning" />
            )}
          />
          <Route
            path="/furniture-assembly"
            render={(props) => (
              <ServiceDetailPage {...props} serviceType="furniture-assembly" />
            )}
          />
          <Route
            path="/electrical-installation"
            render={(props) => (
              <ServiceDetailPage
                {...props}
                serviceType="electrical-installation"
              />
            )}
          />
          <Route
            path="/moving"
            render={(props) => (
              <ServiceDetailPage {...props} serviceType="moving" />
            )}
          />
          <Route
            path="/handyman"
            render={(props) => (
              <ServiceDetailPage {...props} serviceType="handyman" />
            )}
          />
        </Switch>
      </BrowserRouter>
    </Authentication>
  );
}

export default App;
