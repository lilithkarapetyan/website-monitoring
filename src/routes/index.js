import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './privateRoute';

// pages
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Route path="/registration" component={Registration} />
    <Route path="/login" component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
