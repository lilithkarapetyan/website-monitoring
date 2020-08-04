import React from 'react';
import { Bar, Line, HorizontalBar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer, TableRow, Paper,
  Card, Container, Box,
} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useData } from '../../hooks';
import chartConfig from '../../helpers/chartConfig';

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
  chart: {
    minWidth: '360px',
    width: '50%',
    float: 'left',
    padding: '20px',
    boxSizing: 'border-box',
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
  title: {
    padding: '20px',
  },
  details: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
});

const Dashboard = () => {
  const {
    suggestions,
    warnings,
    info,
    requests,
    images,
    warningsStat,
    scripts,
  } = useData();

  const imgs = Array.from(images).map((img) => img.url);
  const imgSizes = Array.from(images).map((req) => req.size);
  const urls = Array.from(requests).map((req) => req.url);
  const durations = Array.from(requests).map((req) => req.duration);
  const dates = Array.from(warningsStat).map((warn) => warn.date);
  const counts = Array.from(warningsStat).map((warn) => warn.count);
  const script = Array.from(scripts).map((s) => s.url);
  const scriptSizes = Array.from(scripts).map((s) => s.size);

  const reqTimingData = chartConfig(urls, durations, 'Requests Duration');
  const imgSizeData = chartConfig(imgs, imgSizes, 'Image files sizes');
  const scriptSizeData = chartConfig(script, scriptSizes, 'Script files sizes');
  const warningsStatistics = chartConfig(dates, counts, 'Number of warnings per hour');

  console.log('Suggestions: ', suggestions);
  console.log('Warnings: ', warnings);
  console.log('Info: ', info);
  const classes = useStyles();
  console.log('imgs:', images);
  /* TODO: Move charts to different files */
  return (
    <div>
      <Typography><h2 className={classes.title}>App dashboard</h2></Typography>
      <div>
        <Container className={classes.chart}>
          <Card>
            <Bar
              data={reqTimingData}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                scales: {
                  xAxes: [{
                    ticks: {
                      autoSkip: true,
                      fontSize: 0,
                    },
                  }],
                },
              }}
            />
          </Card>
        </Container>

        <Container className={classes.chart}>
          <Card>
            <Line
              data={warningsStatistics}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                scales: {
                  xAxes: [{
                    ticks: {
                      autoSkip: true,
                      fontSize: 0,
                    },
                  }],
                },
              }}
            />
          </Card>
        </Container>

        <Container className={classes.chart}>
          <Card>
            <HorizontalBar
              data={imgSizeData}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                scales: {
                  yAxes: [{
                    ticks: {
                      autoSkip: true,
                      fontSize: 0,
                    },
                  }],
                },
              }}
            />
          </Card>
        </Container>

        <Container className={classes.chart}>
          <Card>
            <HorizontalBar
              data={scriptSizeData}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                scales: {
                  yAxes: [{
                    ticks: {
                      autoSkip: true,
                      fontSize: 0,
                    },
                  }],
                },
              }}
            />
          </Card>
        </Container>

        <Container className={classes.table}>

          <Box className={`${classes.box} ${classes.info}`}>
            <Typography><b>Information</b></Typography>
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
          </Box>
        </Container>

        <Container className={classes.table}>
          <Box className={`${classes.box} ${classes.warnings}`}>
            <Typography><b>Warnings</b></Typography>
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
          </Box>
        </Container>

        <Container className={classes.table}>
          <Box className={`${classes.box} ${classes.suggestions}`}>
            <Typography><b>Suggestions</b></Typography>
            <Card>
              {Array.from(suggestions).map((suggestion) => (
                <Accordion key={suggestion.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{suggestion.problem}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <pre className={classes.details}>
                      {suggestion.details}
                    </pre>
                  </AccordionDetails>
                </Accordion>
              ))}

            </Card>
          </Box>
        </Container>

      </div>
    </div>
  );
};

export default Dashboard;
