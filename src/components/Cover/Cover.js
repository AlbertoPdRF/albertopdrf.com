import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Emoji from '../Emoji/Emoji';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100vw',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Cover = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h1">
            <Emoji emoji="👋" name="Waving hand emoji" />
            Hey!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Welcome to my personal website!
            <Emoji emoji="🎉" name="Party popper" />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cover;
