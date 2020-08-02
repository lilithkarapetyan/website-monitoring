import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import imagePlaceholder from '../../assets/app-placeholder.png';

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },
});

export default function Home() {
  const [app] = useState(JSON.parse(sessionStorage.getItem('user')).app);
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={imagePlaceholder}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {app.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {app.id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Open Current Analytics
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
