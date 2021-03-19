import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewUser from "../pages/NewUser";
import Login from "../pages/Login";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/newuser" component={NewUser} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/tasks" component={Tasks} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
