import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// pages
import Home from '../pages/Home';

const Routes = () => {
  return <Switch>
    <Route path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
};

export default Routes;
