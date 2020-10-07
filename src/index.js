import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import "normalize.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import JoinUsPage from "./component/JoinUs";
import ContactUsPage from "./component/ContactUs";
import ServiceDetail from "./component/ServiceDetail";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/join-us" component={JoinUsPage} />
      <Route path="/contact" component={ContactUsPage} />
      <Route path="/service" component={ServiceDetail} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
