import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Button } from '@material-ui/core';

import classnames from 'classnames/bind';

import styles from './Registration.module.scss';

const cx = classnames.bind(styles);

const Registration = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { push } = useHistory();

  const handleRegistrationSubmit = useCallback(() => {
    const user = JSON.stringify({
      name,
      surname,
      email,
      password,
    });
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('isLogged', true);
    push('/');
  }, [push, name, surname, email, password]);

  return (
    <Grid container>
      <Grid item xs={false} sm={2} md={3} lg={4} />
      <Grid item xs={12} sm={8} md={6} lg={4} className={cx('formWrapper')}>
        <h2>Registration</h2>
        <form className={cx('form')} onSubmit={handleRegistrationSubmit}>
          <TextField
            className={cx('input')}
            label="Name"
            value={name}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className={cx('input')}
            label="Surname"
            value={surname}
            variant="outlined"
            onChange={(e) => setSurname(e.target.value)}
          />
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

export default Registration;
