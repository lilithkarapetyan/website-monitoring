import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (// eslint-disable-line
  <Route
    {...rest} // eslint-disable-line
    render={(props) => (
      sessionStorage.getItem('isLogged') ? (
        <Component {...props} /> // eslint-disable-line
      )
        : (
          <Redirect to='/login' />
        )
    )}
  />
);

export default PrivateRoute;
