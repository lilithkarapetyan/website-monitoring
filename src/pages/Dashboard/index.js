import React from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, Container } from '@material-ui/core';
import { useData } from '../../hooks';
import chartConfig from '../../helpers/chartConfig';

const useStyles = makeStyles({
  table: {
    minWidth: '360px',
    width: '50%',
    float: 'left',
    padding: '20px',
    boxSizing: 'border-box',
  },
  chart: {
    minWidth: '360px',
    width: '50%',
    float: 'left',
    padding: '20px',
    boxSizing: 'border-box',
  },
});

const Dashboard = () => {
  const {
    suggestions,
    warnings,
    info,
    requests,
    images,
  } = useData();

  const imgs = Array.from(images).map((img) => img.url);
  const imgSizes = Array.from(images).map((req) => req.size);
  const urls = Array.from(requests).map((req) => req.url);
  // const sizes = Array.from(requests).map((req) => req.size);
  const durations = Array.from(requests).map((req) => req.duration);
  const reqTimingData = chartConfig(urls, durations, 'Requests\' Duration');
  // const reqSizeData = chartConfig(urls, sizes, 'Requests\' size');
  const imgSizeData = chartConfig(imgs, imgSizes, 'Images\' size');

  console.log('Suggestions: ', suggestions);
  console.log('Warnings: ', warnings);
  console.log('Info: ', info);
  const classes = useStyles();
  console.log('imgs:', images);
  return (
    <div>
      <Container className={classes.table}>
        <Card>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Key</TableCell>
                  <TableCell align="right">Value</TableCell>
                </TableRow>
              </TableHead>
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
      </Container>

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
          <Bar
            data={imgSizeData}
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
    </div>
  );
};

export default Dashboard;
