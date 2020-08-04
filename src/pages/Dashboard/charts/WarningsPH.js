/* eslint-disable react/prop-types */
import React from 'react';
import { Line } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card, Container,
} from '@material-ui/core';

import chartConfig from '../../../helpers/chartConfig';

const useStyles = makeStyles({
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
});

const RequestDuration = (props) => {
  const {
    warningsStat,
  } = props;

  const classes = useStyles();

  const dates = Array.from(warningsStat).map((warn) => warn.date);
  const counts = Array.from(warningsStat).map((warn) => warn.count);

  const warningsStatistics = chartConfig(dates, counts, 'Number of warnings per hour');

  return (
    <div>
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

    </div>
  );
};

export default RequestDuration;
