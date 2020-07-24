import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, ...rest }) => (// eslint-disable-line
  <Route
    {...rest} // eslint-disable-line
    render={(props) => (
      sessionStorage.getItem('isLogged') ? (
        React.createElement(component, props)
      )
        : (
          <Redirect to={{
            pathname: '/login',
          }}
          />
        )
    )}
  />
);

export default PrivateRoute;
