import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
