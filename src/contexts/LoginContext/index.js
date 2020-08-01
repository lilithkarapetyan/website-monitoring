import React from 'react';

const LoginCtx = React.createContext(sessionStorage.getItem('isLogged'));

export default LoginCtx;
