import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './privateRoute';
// pages
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Account from '../pages/Account';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/account" component={Account} />
    <Route path="/registration" component={Registration} />
    <Route path="/login" component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
