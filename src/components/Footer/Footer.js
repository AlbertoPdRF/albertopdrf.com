import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import FavoriteIcon from '@material-ui/icons/Favorite';

import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    bottom: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: '100%',
    textAlign: 'center',
  },
  middle: {
    verticalAlign: 'middle',
  },
}));

const repository = {
  href: 'https://github.com/AlbertoPdRF/albertopdrf.com',
  icon: <GitHubIcon />,
};

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <CodeIcon className={classes.middle} /> with{' '}
        <FavoriteIcon className={classes.middle} /> and{' '}
        <img
          className={classes.middle}
          src="../../../images/technologies/js.png"
          alt="JavaScript"
          height="24px"
          width="24px"
        />{' '}
        on{' '}
        <SocialMediaLink
          className={classes.middle}
          href={repository.href}
          icon={repository.icon}
        />
      </Typography>
    </div>
  );
};

export default Footer;
