import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Button } from '@material-ui/core';

// styles
import classnames from 'classnames/bind';

import styles from './Registration.module.scss';

const cx = classnames.bind(styles);

const Registration = () => {
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const { push } = useHistory();

  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;

    setFields((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  }, [setFields]);

  const handleRegistrationSubmit = useCallback(() => {
    const user = JSON.stringify(fields);

    sessionStorage.setItem('user', user);
    sessionStorage.setItem('isLogged', true);
    push('/');
  }, [push, fields]);

  return (
    <Grid container>
      <Grid item xs={false} sm={2} md={3} lg={4} />
      <Grid item xs={12} sm={8} md={6} lg={4} className={cx('formWrapper')}>
        <h2>Registration</h2>
        <form className={cx('form')} onSubmit={handleRegistrationSubmit}>
          <TextField
            className={cx('input')}
            label="Name"
            name="name"
            value={fields.name}
            variant="outlined"
            onChange={(e) => handleFieldChange(e)}
          />
          <TextField
            className={cx('input')}
            label="Surname"
            value={fields.surname}
            name="surname"
            variant="outlined"
            onChange={(e) => handleFieldChange(e)}
          />
          <TextField
            className={cx('input')}
            label="Email"
            value={fields.email}
            name="email"
            variant="outlined"
            onChange={(e) => handleFieldChange(e)}
          />
          <TextField
            className={cx('input')}
            label="Password"
            type="password"
            name="password"
            value={fields.password}
            variant="outlined"
            onChange={(e) => handleFieldChange(e)}
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