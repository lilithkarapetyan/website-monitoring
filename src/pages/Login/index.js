import React, { useState, useCallback, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Grid, TextField, Button, Typography,
} from '@material-ui/core';

import classnames from 'classnames/bind';
import { sendUserLogininfo } from '../../fetch';
import { isEmail, passwordValidation } from '../../helpers';

import LoginCtx from '../../contexts/LoginContext';

// styles
import styles from './Login.module.scss';

const cx = classnames.bind(styles);

const Login = () => {
  // eslint-disable-next-line
  const { login, setLogin } = useContext(LoginCtx);
  const [fields, setFields] = useState({
    email: undefined,
    password: undefined,
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
          setLogin(true);
          return push('/');
        }

        throw new Error('User is not found');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fields, push, setLogin]);

  return (
    <Grid container>
      <Grid item xs={false} sm={2} md={3} lg={4} />
      <Grid item xs={12} sm={8} md={6} lg={4} className={cx('formWrapper')}>
        <Typography element='h2'>Login</Typography>
        <form className={cx('form')} onSubmit={(e) => handleLoginSubmit(e)}>
          <TextField
            className={cx('input')}
            label="Email"
            name="email"
            error={!isEmail(fields.email)}
            helperText={!isEmail(fields.email) && 'Email is not vaild'}
            value={fields.email}
            variant="outlined"
            onChange={(e) => handleFieldChange(e)}
          />
          <TextField
            className={cx('input')}
            label="Password"
            type="password"
            name="password"
            error={passwordValidation(fields.password)}
            helperText={passwordValidation(fields.password) && 'Password is not vaild'}
            value={fields.password}
            variant="outlined"
            onChange={(e) => handleFieldChange(e)}
          />
          <Button type="Submit" variant="contained" color="primary">
            Submit
          </Button>
          <span>
            Not a member?
            <Link to='/registration'>Register</Link>
          </span>
        </form>
      </Grid>
      <Grid item xs={false} sm={2} md={3} lg={4} />
    </Grid>
  );
};

export default Login;
