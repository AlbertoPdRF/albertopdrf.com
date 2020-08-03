import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0.5),
  },
}));

const TechnologyChip = (props) => {
  const { name, icon, ...rest } = props;

  const classes = useStyles();

  return (
    <Chip
      className={classes.margin}
      variant="outlined"
      avatar={
        <Avatar src={`../../../images/technologies/${icon}`} alt={name} />
      }
      label={name}
      {...rest}
    />
  );
};

export default TechnologyChip;
