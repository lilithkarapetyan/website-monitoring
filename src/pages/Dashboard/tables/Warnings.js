/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, Container, Box,
} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const Dashboard = (props) => {
  const {
    warnings,
  } = props;
  const classes = useStyles();

  let content = <Typography><i>You do not have any warnings! Good job!</i></Typography>;
  if (warnings && warnings.length) {
    content = (
      <Card>
        {Array.from(warnings).map((warning) => (

          <Accordion key={warning.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{warning.message}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <pre className={classes.details}>
                <em>
                  Warning creation date:
                  {warning.date}
                </em>
                <br />
                <br />
                {warning.details}
              </pre>
            </AccordionDetails>
          </Accordion>
        ))}

      </Card>
    );
  }
  return (
    <div>

      <Container className={classes.table}>
        <Box className={`${classes.box} ${classes.warnings}`}>
          <Typography><b>Warnings</b></Typography>
          {content}
        </Box>
      </Container>

    </div>
  );
};

export default Dashboard;
