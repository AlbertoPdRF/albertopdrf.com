import React from 'react';
import Link from '@material-ui/core/Link';

const SocialMediaLink = (props) => {
  const { href, icon } = props;

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </Link>
  );
};

export default SocialMediaLink;
