import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TechnologyChip from '../TechnologyChip/TechnologyChip';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    display: 'flex',
    maxWidth: '100vw',
    backgroundColor: theme.palette.primary.main,
  },
  chip: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const technologies = [
  {
    name: 'C++',
    icon: 'cpp.png',
  },
  {
    name: 'React',
    icon: 'react.png',
  },
  {
    name: 'Ruby on Rails',
    icon: 'ror.png',
  },
  {
    name: 'Node.js',
    icon: 'node-js.png',
  },
  {
    name: 'PostgreSQL',
    icon: 'psql.png',
  },
  {
    name: 'MongoDB',
    icon: 'mongodb.png',
  },
  {
    name: 'MySQL',
    icon: 'mysql.png',
  },
];

const Technologies = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1}>
        {technologies.map((t) => (
          <Grid item key={t.name}>
            <TechnologyChip
              className={classes.chip}
              name={t.name}
              icon={t.icon}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Technologies;
