/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer, TableRow, Paper,
  Card, Container, Box,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: '360px',
    width: '100%',
    float: 'left',
    display: 'block',
    margin: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
    maxWidth: 'unset!important',
  },
  box: {
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px #eeeeee',
    color: 'white',
    minHeight: '150px',
  },
  suggestions: {
    backgroundColor: 'rgba(40,167,69,0.6)',
  },
  info: {
    backgroundColor: 'rgba(23,162,184,0.6)',
  },
  warnings: {
    backgroundColor: 'rgba(255,193,7,0.6)',
  },
  details: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
});

const Info = (props) => {
  const {
    info,
  } = props;
  const classes = useStyles();
  let content = <Typography><i>No information yet</i></Typography>;
  if (info && info.length) {
    content = (
      <Card>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {info.map((row) => (
                <TableRow key={row.key}>
                  <TableCell component="th" scope="row">
                    {row.key}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    );
  }

  return (
    <div>
      <Container className={classes.table}>
        <Box className={`${classes.box} ${classes.info}`}>
          <Typography><b>Information</b></Typography>
          {content}
        </Box>
      </Container>

    </div>
  );
};

export default Info;
