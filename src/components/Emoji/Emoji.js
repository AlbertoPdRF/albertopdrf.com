import React from 'react';

const Emoji = (props) => {
  const { emoji, name } = props;

  return (
    <span role="img" aria-label={`${name} emoji`}>
      {emoji}
    </span>
  );
};

export default Emoji;
