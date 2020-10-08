import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../HomePage";
import JoinUsPage from "../JoinUs";
import ContactUsPage from "../ContactUs";
import ServiceDetailPage from "../ServiceDetail";
import UserProfilePage from "../UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/join-us" component={JoinUsPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/service" component={ServiceDetailPage} />
        <Route path="/user-profile" component={UserProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
