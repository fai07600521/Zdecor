import './App.css';
import React from 'react';
import './index.css';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginPage from "./views/Pages/LoginPage";
import RegisterPage from "./views/Pages/RegisterPage";
import About from "./views/Pages/About";
import Services from "./views/Pages/Services";


const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
    <Switch>
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/RegisterPage" component={RegisterPage} />
      <Route path="/Services" component={Services} />
      <Route path="/" component={About} />
    </Switch>
  </Router>
  );
}

export default App;
