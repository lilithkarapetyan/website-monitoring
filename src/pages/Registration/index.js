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

import { sendUserRegInfo } from '../../fetch';

// styles
import styles from './Registration.module.scss';

// helpers
import {
  isEmail,
  isPassword,
  emailValidation,
  passwordValidation,
  textFieldValidation,
} from '../../helpers';

const cx = classnames.bind(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
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
  // UGLY: This is a temporary solution for input validation
  const [fields, setFields] = useState({
    name: undefined,
    surname: undefined,
    appName: undefined,
    email: undefined,
    password: undefined,
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

  const handleRegistrationSubmit = useCallback((e) => {
    e.preventDefault(); // Getting rid of "form is not connected" warning

    sendUserRegInfo({
      ...fields,
      password: Buffer.from(fields.password).toString('base64'),
      app: {
        name: fields.appName,
        id: uuidv4(), // creating an ID for user's app
      },
    });

    push('/login');
  }, [fields, push]);

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
      <Grid item xs={false} sm={2} md={3} lg={4} />
      <Grid item xs={12} sm={8} md={6} lg={4} className={cx('formWrapper', classes.container)}>
        <Typography variant="h4">Registration</Typography>
        <form
          className={cx('form', classes.root)}
          noValidate
          autoComplete="off"
          onSubmit={(e) => handleRegistrationSubmit(e)}
        >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            error={textFieldValidation(fields.name)}
            helperText={textFieldValidation(fields.name) && 'Name should be full'}
            value={fields.name}
            onChange={handleFieldChange}
          />
          <TextField
            label="Surname"
            variant="outlined"
            name="surname"
            error={textFieldValidation(fields.surname)}
            helperText={textFieldValidation(fields.surname) && 'Surname should be full'}
            value={fields.surname}
            onChange={handleFieldChange}
          />
          <TextField
            label="App Name"
            variant="outlined"
            name="appName"
            error={textFieldValidation(fields.appName)}
            helperText={textFieldValidation(fields.appName) && 'App Name should be full'}
            value={fields.appName}
            onChange={handleFieldChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            error={!emailValidation(fields.email)}
            helperText={!emailValidation(fields.email) && 'Email is not vaild'}
            value={fields.email}
            onChange={handleFieldChange}
          />
          <TextField
            label="Password"
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
