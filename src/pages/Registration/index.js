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
  isText,
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
  const [fields, setFields] = useState({
    name: {
      value: '',
      firstClick: false,
    },
    surname: {
      value: '',
      firstClick: false,
    },
    appName: {
      value: '',
      firstClick: false,
    },
    email: {
      value: '',
      firstClick: false,
    },
    password: {
      value: '',
      firstClick: false,
    },
  });

  const { push } = useHistory();

  // One dynamic handler for all fields
  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;

    setFields((prevState) => ({
      ...prevState,
      [name]: {
        value,
        firstClick: true,
      },
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
            error={fields.name.firstClick && !isText(fields.name.value)}
            helperText={fields.name.firstClick && !isText(fields.name.value) && 'Name should be full'}
            value={fields.name.value}
            onChange={handleFieldChange}
          />
          <TextField
            label="Surname"
            variant="outlined"
            name="surname"
            error={fields.surname.firstClick && !isText(fields.surname.value)}
            helperText={fields.surname.firstClick && !isText(fields.surname.value) && 'Surname should be full'}
            value={fields.surname.value}
            onChange={handleFieldChange}
          />
          <TextField
            label="App Name"
            variant="outlined"
            name="appName"
            error={fields.appName.firstClick && !isText(fields.appName.value)}
            helperText={fields.appName.firstClick && !isText(fields.appName.value) && 'App Name should be full'}
            value={fields.appName.value}
            onChange={handleFieldChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            error={fields.email.firstClick && !isEmail(fields.email.value)}
            helperText={fields.email.firstClick && (!isEmail(fields.email.value) && 'Email is not vaild')}
            value={fields.email.value}
            onChange={handleFieldChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            error={fields.password.firstClick && !isPassword(fields.password.value)}
            helperText={fields.password.firstClick && (!isPassword(fields.password.value) && 'Password is too short')}
            value={fields.password.value}
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
