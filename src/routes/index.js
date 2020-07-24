import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';

// pages
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={() => <Home />} />
    <Route exact path="/registration" component={Registration} />
    <Route exact path="/login" component={Login} />
    {/* <Redirect from="*" to="/registration" /> */}
  </Switch>
);

export default Routes;
