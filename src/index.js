import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginPage from "./views/Pages/LoginPage";
import RegisterPage from "./views/Pages/RegisterPage";
import About from "./views/Pages/About";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/RegisterPage" component={RegisterPage} />
      <Route path="/" component={About} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
