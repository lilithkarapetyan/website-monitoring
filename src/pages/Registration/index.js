import React, { useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';

import {
  isEmail,
  isPassword,
  emailValidation,
  passwordValidation,
  textFieldValidation,
} from '../../helpers';

import { sendUserRegInfo } from '../../fetch';

// styles
import styles from './Registration.module.scss';

const cx = classnames.bind(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  container: {
    margin: '50px',
  },
  title: {
    color: '#fff',
  },
}));

const Registration = () => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    name: undefined,
    surname: undefined,
    appName: undefined,
    email: undefined,
    password: undefined,
  });

  const { push } = useHistory();

  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;

    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, [setFields]);

  const handleRegistrationSubmit = useCallback((e) => {
    e.preventDefault();

    sendUserRegInfo({
      ...fields,
      password: Buffer.from(fields.password).toString('base64'),
      app: {
        name: fields.appName,
        id: uuidv4(),
      },
    });

    push('/login');
  }, [fields, push]);

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
      <Grid item xs={false} sm={2} md={3} lg={4} />
      <Grid item xs={12} sm={8} md={6} lg={4} className={cx('formWrapper', classes.container)}>
        <Typography><h2>Registration</h2></Typography>
        <form
          className={cx('form', classes.root)}
          noValidate
          autoComplete="off"
          onSubmit={(e) => handleRegistrationSubmit(e)}
        >
          <TextField
            required
            label="Name"
            variant="outlined"
            name="name"
            error={textFieldValidation(fields.name)}
            helperText={textFieldValidation(fields.name) && 'Name should be full'}
            value={fields.name}
            onChange={handleFieldChange}
          />
          <TextField
            required
            label="Surname"
            variant="outlined"
            name="surname"
            error={textFieldValidation(fields.surname)}
            helperText={textFieldValidation(fields.surname) && 'Surname should be full'}
            value={fields.surname}
            onChange={handleFieldChange}
          />
          <TextField
            required
            label="App Name"
            variant="outlined"
            name="appName"
            error={textFieldValidation(fields.appName)}
            helperText={textFieldValidation(fields.appName) && 'App Name should be full'}
            value={fields.appName}
            onChange={handleFieldChange}
          />
          <TextField
            label="email"
            variant="outlined"
            name="email"
            error={!emailValidation(fields.email)}
            helperText={!emailValidation(fields.email) && 'Email is not vaild'}
            value={fields.email}
            onChange={handleFieldChange}
          />
          <TextField
            label="password"
            variant="outlined"
            name="password"
            error={passwordValidation(fields.password)}
            helperText={passwordValidation(fields.password) && 'Password is not vaild'}
            value={fields.password}
            onChange={handleFieldChange}
            type="password"
          />
          <Button
            disabled={formValidation()}
            type="Submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Typography>
            <span>
              Already have an account?
              {' '}
              <Link to='/login'>Log in</Link>
            </span>
          </Typography>
        </form>
      </Grid>
      <Grid item xs={false} sm={2} md={3} lg={4} />
    </Grid>
  );
};

export default Registration;
