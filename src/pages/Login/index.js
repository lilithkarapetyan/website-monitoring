import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Button } from '@material-ui/core';

import classnames from 'classnames/bind';

import styles from './Login.module.scss';

const cx = classnames.bind(styles);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { push } = useHistory();

  const handleLoginSubmit = useCallback(() => {
    sessionStorage.setItem('isLogged', true);
    push('/');
  }, [push]);

  return (
    <Grid container>
      <Grid item xs={false} sm={2} md={3} lg={4} />
      <Grid item xs={12} sm={8} md={6} lg={4} className={cx('formWrapper')}>
        <h2>Login</h2>
        <form className={cx('form')} onSubmit={handleLoginSubmit}>
          <TextField
            className={cx('input')}
            label="Email"
            value={email}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={cx('input')}
            label="Password"
            type="password"
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="Submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
      <Grid item xs={false} sm={2} md={3} lg={4} />
    </Grid>
  );
};

export default Login;
