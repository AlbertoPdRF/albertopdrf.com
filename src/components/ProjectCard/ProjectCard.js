import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2, 0),
  },
}));

const ProjectCard = (props) => {
  const {
    coverPhoto,
    name,
    description,
    technologies,
    repository,
    live,
  } = props;

  const classes = useStyles();

  return (
    <Card className={classes.margin}>
      <CardMedia
        component="img"
        src={`../../../images/projects/${coverPhoto}`}
        alt={name}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {name}
        </Typography>
        <Typography gutterBottom variant="body1" color="textSecondary">
          {description}
        </Typography>
        {technologies.map((t) => {
          return { ...t, key: t.props.name };
        })}
      </CardContent>
      <CardActions style={{ float: 'right' }}>
        <Button
          color="primary"
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </Button>
        <Button
          color="primary"
          href={live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
