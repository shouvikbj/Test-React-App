import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import Form from "./core/Form";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" exact component={Form} />
      </Switch>
    </Router>
  );
};

export default Routes;
