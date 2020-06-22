import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PersonalDetails from '../PersonalDetails/PersonalDetails';
import SocialMedia from '../SocialMedia/SocialMedia';

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
  },
}));

const Cover = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <PersonalDetails />
        </Grid>
        <Grid item>
          <SocialMedia />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cover;
