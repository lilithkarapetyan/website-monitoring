import React, { useState, useCallback, useEffect } from 'react';
import {
  Grid, TextField, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames/bind';

import {
  isEmail, isPassword, textFieldValidation, passwordValidation, emailValidation,
} from '../../helpers';
import { getUserInfo, updateUserInfo } from '../../fetch';

// styles
import styles from './Account.module.scss';

const cx = classnames.bind(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  container: {
    marginTop: '50px',
    padding: '0 10px',
  },
  title: {
    color: '#fff',
  },
}));

const Account = () => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    appName: '',
    email: '',
    password: '',
  });

  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;

    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, [setFields]);

  const handleAccountChangeSubmit = useCallback((e) => {
    e.preventDefault();
    const encryptedPassword = Buffer.from(fields.password).toString('base64');

    getUserInfo()
      .then((users) => {
        const user = Object.entries(users).filter((u) => {
          if ((!!u[1].email && u[1].email === fields.email)
                    && (!!u[1].password && u[1].password === encryptedPassword)) {
            return true;
          }

          return false;
        });
        // if (user[0]) {
        //     sessionStorage.setItem('user', JSON.stringify(user[0]));
        //     sessionStorage.setItem('isLogged', true);
        //     setLogin(true);
        //     return push('/');
        // }

        // throw new Error('User is not found');

        return user;
      })
      .then((user) => {
        const userId = user[0][0];

        updateUserInfo(userId, {
          ...fields,
          password: Buffer.from(fields.password).toString('base64'),
          app: {
            ...fields.app,
            name: fields.appName,
          },
        })
          .then((u) => {
            sessionStorage.setItem('user', JSON.stringify(u));
          });
      });
  }, [fields]);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('user'));

    setFields({
      name: data.name,
      surname: data.surname,
      appName: data.appName,
      email: data.email,
      password: Buffer.from(data.password, 'base64').toString('ascii'),
    });
  }, []);

  const formValidation = useCallback(() => {
    const {
      name, surname, appName, email, password,
    } = fields;

    if (!name) return true;
    if (!surname) return true;
    if (!appName) return true;
    if (!isEmail(email)) return true;
    if (!isPassword(password)) return true;

    return false;
  }, [fields]);

  return (
    <Grid container>
      <Grid item xs={false} sm={2} />
      <Grid className={cx(classes.container)} item xs={12} sm={8}>
        <Typography><h2>Account</h2></Typography>
        <form
          className={cx('form', classes.root)}
          noValidate
          autoComplete="off"
          onSubmit={(e) => handleAccountChangeSubmit(e)}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            error={textFieldValidation(fields.name)}
            helperText={textFieldValidation(fields.name) && 'Name should be full'}
            value={fields.name}
            onChange={handleFieldChange}
          />
          <TextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            name="surname"
            error={textFieldValidation(fields.surname)}
            helperText={textFieldValidation(fields.surname) && 'Surname should be full'}
            value={fields.surname}
            onChange={handleFieldChange}
          />
          <TextField
            id="outlined-basic"
            label="App name"
            variant="outlined"
            name="appName"
            error={textFieldValidation(fields.appName)}
            helperText={textFieldValidation(fields.appname) && 'App Name should be full'}
            value={fields.appName}
            onChange={handleFieldChange}
          />
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            name="email"
            error={!emailValidation(fields.email)}
            helperText={!emailValidation(fields.email) && 'Email is not vaild'}
            value={fields.email}
            onChange={handleFieldChange}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            name="password"
            error={passwordValidation(fields.password)}
            helperText={passwordValidation(fields.password) && 'Password is not vaild'}
            value={fields.password}
            onChange={handleFieldChange}
            type="password"
          />
          <Button disabled={formValidation()} type="Submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

export default Account;
