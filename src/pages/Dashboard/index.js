import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Info, Suggestions, Warnings } from './tables';
import {
  ImageSize, RequestDuration, ScriptSize, WarningsPH,
} from './charts';
import { useData } from '../../hooks';

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
  const classes = useStyles();

  return (
    <div>
      <Typography component="h2" variant="h5" className={classes.title}>App dashboard</Typography>
      <div>
        <RequestDuration requests={requests} />
        <WarningsPH warningsStat={warningsStat} />
        <ImageSize images={images} />
        <ScriptSize scripts={scripts} />

        <Info info={info} />
        <Warnings warnings={warnings} />
        <Suggestions suggestions={suggestions} />

      </div>
    </div>
  );
};

export default Dashboard;
