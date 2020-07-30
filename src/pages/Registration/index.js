import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames/bind';

// styles
import styles from './Registration.module.scss';

const cx = classnames.bind(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    marginTop: '50px',
  },
  title: {
    color: '#fff',
  },
}));

const Registration = () => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const { push } = useHistory();

  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;

    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, [setFields]);

  const handleRegistrationSubmit = useCallback(() => {
    const user = JSON.stringify(fields);

    localStorage.setItem('user', user);
    localStorage.setItem('isLogged', 'true');
    push('/');
  }, [push, fields]);

  return (
    <Grid container>
      <Grid item xs={false} sm={2} md={3} lg={4} />
      <Grid item xs={12} sm={8} md={6} lg={4} className={cx('formWrapper', classes.container)}>
        <Typography variant="h4" component="h2" className={classes.title}>
          Registration
        </Typography>
        <form
          className={cx('form', classes.root)}
          noValidate
          autoComplete="off"
          onSubmit={handleRegistrationSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={fields.name}
            onChange={handleFieldChange}
          />
          <TextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            name="surname"
            value={fields.surname}
            onChange={handleFieldChange}
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
