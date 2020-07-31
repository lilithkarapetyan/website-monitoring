import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...otherProps }) => (sessionStorage.getItem('user') ? (
  <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
    render={(props) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...props} />
    )}
  />
) : (
  <Redirect
    to="/login"
  />
));

export default PrivateRoute;
