import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Masonry from 'react-masonry-css';

const useStyles = makeStyles((theme) => ({
  masonryGrid: {
    display: 'flex',
    width: 'inherit',
  },
  masonryColumn: {
    margin: theme.spacing(1),
    backgroundClip: 'padding-box',
  },
}));

const BreakpointMasonry = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  const breakpointCols = {
    default: 4,
    [theme.breakpoints.values.xl]: 3,
    [theme.breakpoints.values.lg]: 2,
    [theme.breakpoints.values.md]: 2,
    [theme.breakpoints.values.sm]: 1,
    [theme.breakpoints.values.xs]: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={classes.masonryGrid}
      columnClassName={classes.masonryColumn}
    >
      {children}
    </Masonry>
  );
};

export default BreakpointMasonry;
