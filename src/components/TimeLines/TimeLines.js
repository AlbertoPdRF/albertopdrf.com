import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
  },
  timeLine: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
  },
  experience: {
    backgroundColor: theme.palette.primary.dark,
  },
  education: {
    backgroundColor: theme.palette.primary.light,
  },
  secondaryText: {
    color: theme.palette.primary.contrastText,
  },
  secondaryTail: {
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

const data = [
  {
    key: 'experience',
    items: [
      {
        period: '2018 - present',
        title: 'Predoctoral researcher',
        location:
          'CIEMAT (Research Center for Energy, Environment and Technology)',
      },
      {
        period: '2020',
        title: 'Internship',
        location: 'MLH Fellowship powered by GitHub',
      },
      {
        period: '2017 - 2018',
        title: 'Madrid area manager',
        location: 'Yobbiks',
      },
      {
        period: '2017',
        title: 'Internship',
        location: 'CIEMAT',
      },
    ],
  },
  {
    key: 'education',
    items: [
      {
        period: '2017 - present',
        title: 'PhD in Nuclear Physics',
        location: 'UCM (Complutense University of Madrid)',
      },
      {
        period: '2016 - 2017',
        title: 'MSc in Nuclear Physics',
        location: 'UAM (Autonomous University of Madrid)',
      },
      {
        period: '2014',
        title: 'English language immersion course',
        location: 'UIMP (Menéndez Pelayo International University)',
      },
      {
        period: '2012 - 2016',
        title: 'Physics degree',
        location: 'UAM',
      },
    ],
  },
];

const TimeLines = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {data.map((d) => (
          <Grid
            item
            key={d.key}
            className={`${classes.timeLine} ${classes[d.key]}`}
            md={6}
            sm={12}
          >
            <Timeline align="alternate">
              {d.items.map((i, index) => (
                <TimelineItem key={`${i.title} - ${i.location}`}>
                  <TimelineOppositeContent>
                    <Typography>{i.period}</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot className={classes.secondaryTail} />
                    {index + 1 !== d.items.length && (
                      <TimelineConnector className={classes.secondaryTail} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent className={classes.secondaryText}>
                    <Typography>
                      <strong>{i.title}</strong>
                    </Typography>
                    <Typography variant="caption">{i.location}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TimeLines;
