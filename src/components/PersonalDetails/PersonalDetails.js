import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Emoji from '../Emoji/Emoji';
import PersonalDetailCard from '../PersonalDetailCard/PersonalDetailCard';

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: '100%',
  },
  avatar: {
    height: '200px',
    width: '200px',
    border: 'solid',
    borderColor: theme.palette.primary.main,
    margin: 'auto',
  },
}));

const name = 'Alberto Pérez de Rada Fiol';

const personalDetails = [
  {
    emoji: <Emoji emoji="👨" name="Man" />,
    title: name,
    subheader: 'He/him',
  },
  {
    emoji: <Emoji emoji="📍" name="Round pushpin" />,
    title: 'Madrid',
    subheader: 'Spain',
  },
  {
    emoji: <Emoji emoji="🎓" name="Graduation cap" />,
    title: 'Nuclear Physics',
    subheader: 'PhD in progress',
  },
  {
    emoji: <Emoji emoji="💻" name="Personal computer" />,
    title: 'Self-taught developer',
    subheader: 'C++, React, Ruby on Rails',
  },
];

const PersonalDetails = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item className={classes.fullWidth}>
        <Avatar
          className={classes.avatar}
          alt={name}
          src="../../../images/me.jpg"
        />
      </Grid>
      {personalDetails.map((pd) => (
        <Grid item key={pd.title}>
          <PersonalDetailCard
            emoji={pd.emoji}
            title={pd.title}
            subheader={pd.subheader}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default PersonalDetails;
