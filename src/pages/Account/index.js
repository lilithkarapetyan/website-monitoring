import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid, TextField, Typography, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames/bind';

import { getUserInfo, updateUserInfo } from '../../fetch';

// styles
import styles from './Account.module.scss';

// helpers
import {
  isEmail, isPassword, isText,
} from '../../helpers';

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

  const { push } = useHistory();

  // One dynamic handler for all fields
  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;

    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, [setFields]);

  const handleAccountChangeSubmit = useCallback((e) => {
    e.preventDefault(); // Getting rid of "form is not connected" warning
    const encryptedPassword = Buffer.from(fields.password).toString('base64');

    // First we need to get our user
    // And then change user's info
    getUserInfo()
      .then((users) => {
        const user = Object.entries(users).filter((u) => {
          if ((!!u[1].email && u[1].email === fields.email)
                    && (!!u[1].password && u[1].password === encryptedPassword)) {
            return true;
          }

          return false;
        });

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
          })
          .then(() => push('/'));
      });
  }, [fields, push]);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('user'));

    setFields({
      name: data.name,
      surname: data.surname,
      app: data.app,
      appName: data.appName,
      email: data.email,
      password: Buffer.from(data.password, 'base64').toString('ascii'),
    });
  }, []);

  // If at least one field is not valid,
  // Then the submit button will be disabled
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
        <Typography variant="h3">Account</Typography>
        <form
          className={cx('form', classes.root)}
          noValidate
          autoComplete="off"
          onSubmit={(e) => handleAccountChangeSubmit(e)}
        >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            error={!isText(fields.name)}
            helperText={!isText(fields.name) && 'Name should be full'}
            value={fields.name}
            onChange={handleFieldChange}
          />
          <TextField
            label="Surname"
            variant="outlined"
            name="surname"
            error={!isText(fields.surname)}
            helperText={!isText(fields.surname) && 'Surname should be full'}
            value={fields.surname}
            onChange={handleFieldChange}
          />
          <TextField
            label="App name"
            variant="outlined"
            name="appName"
            error={!isText(fields.appName)}
            helperText={!isText(fields.appName) && 'App Name should be full'}
            value={fields.appName}
            onChange={handleFieldChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            error={!isEmail(fields.email)}
            helperText={!isEmail(fields.email) && 'Email is not vaild'}
            value={fields.email}
            onChange={handleFieldChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            error={!isPassword(fields.password)}
            helperText={!isPassword(fields.password) && 'Password is too short'}
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
