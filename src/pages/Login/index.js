import React, { useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Grid, TextField, Button, Typography,
} from '@material-ui/core';

import classnames from 'classnames/bind';
import { sendUserLogininfo } from '../../fetch';

// styles

import styles from './Login.module.scss';

const cx = classnames.bind(styles);

const Login = () => {
  const [fields, setFields] = useState({
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

  const handleLoginSubmit = useCallback((e) => {
    e.preventDefault();
    const encryptedPassword = Buffer.from(fields.password).toString('base64');

    sendUserLogininfo()
      .then((users) => {
        const user = Object.values(users).filter((u) => {
          if ((!!u.email && u.email === fields.email)
            && (!!u.password && u.password === encryptedPassword)) {
            return true;
          }

          return false;
        });

        if (user[0]) {
          sessionStorage.setItem('user', JSON.stringify(user[0]));
          sessionStorage.setItem('isLogged', true);
          return push('/');
        }

        throw new Error('User is not found');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fields, push]);

  return (
    <Grid container className={cx('container')}>
      <Grid item xs={false} sm={2} md={3} lg={4} />
      <Grid item xs={12} sm={8} md={6} lg={4} className={cx('formWrapper')}>
        <Typography><h2>Login</h2></Typography>
        <form className={cx('form')} onSubmit={(e) => handleLoginSubmit(e)}>
          <TextField
            className={cx('input')}
            label="Email"
            name="email"
            value={fields.email}
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
          <Button type="Submit" variant="contained" className={cx('submit')} color="primary">
            Login
          </Button>
          {/* TODO: give styles to this span */}
          <Typography>
            <span>
              Not a member?
              {' '}
              <Link to='/registration'>Register</Link>
            </span>
          </Typography>
        </form>
      </Grid>
      <Grid item xs={false} sm={2} md={3} lg={4} />
    </Grid>
  );
};

export default Login;
