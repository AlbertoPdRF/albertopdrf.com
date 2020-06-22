import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

const PersonalDetailCard = (props) => {
  const { emoji, title, subheader } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Typography variant="h4">{emoji}</Typography>}
        title={title}
        subheader={subheader}
      />
    </Card>
  );
};

export default PersonalDetailCard;
