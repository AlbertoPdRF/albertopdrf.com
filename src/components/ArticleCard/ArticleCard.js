import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2, 0),
  },
  right: {
    float: 'right',
  },
}));

const ArticleCard = (props) => {
  const { title, tags, coverImage, description, url } = props;

  const classes = useStyles();

  return (
    <Card className={classes.margin}>
      <CardHeader title={title} subheader={`#${tags.join(', #')}`} />
      <CardMedia component="img" src={coverImage} alt={title} title={title} />
      <CardContent>
        <Typography gutterBottom variant="body1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.right}>
        <Button
          color="primary"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Full article
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
