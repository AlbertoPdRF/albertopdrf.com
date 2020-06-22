import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';

import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

const socialMedia = [
  {
    href: 'https://github.com/AlbertoPdRF',
    icon: <GitHubIcon />,
  },
  {
    href: 'https://www.linkedin.com/in/albertopdrf/',
    icon: <LinkedInIcon />,
  },
  {
    href: 'mailto:albertopdrf@gmail.com',
    icon: <EmailIcon />,
  },
  {
    href: 'https://www.instagram.com/albertopdrf/',
    icon: <InstagramIcon />,
  },
  {
    href: 'https://twitter.com/AlbertoPdRF',
    icon: <TwitterIcon />,
  },
  {
    href: 'https://www.facebook.com/AlbertoPdRF',
    icon: <FacebookIcon />,
  },
];

const SocialMedia = () => (
  <Grid container justify="center" spacing={2}>
    {socialMedia.map((sm) => (
      <Grid item key={sm.href}>
        <SocialMediaLink href={sm.href} icon={sm.icon} />
      </Grid>
    ))}
  </Grid>
);

export default SocialMedia;
