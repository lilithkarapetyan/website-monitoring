/* eslint-disable react/prop-types */
import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

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
    images,
  } = props;

  const classes = useStyles();

  const imgs = Array.from(images).map((img) => img.url);
  const imgSizes = Array.from(images).map((req) => req.size);

  const imgSizeData = chartConfig(imgs, imgSizes, 'Image files sizes');

  return (
    <div>
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

    </div>
  );
};

export default RequestDuration;
