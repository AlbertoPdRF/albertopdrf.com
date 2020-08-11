import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BreakpointMasonry from '../BreakpointMasonry/BreakpointMasonry';
import ArticleCard from '../ArticleCard/ArticleCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    display: 'flex',
    maxWidth: '100vw',
    backgroundColor: theme.palette.primary.main,
  },
}));

const user = {
  username: 'albertopdrf',
};

const Articles = () => {
  const classes = useStyles();

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${user.username}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className={classes.root}>
      {articles && (
        <BreakpointMasonry>
          {articles.map((a) => (
            <ArticleCard
              key={a.slug}
              title={a.title}
              tags={a.tag_list}
              coverImage={a.cover_image}
              description={a.description}
              url={a.canonical_url}
            />
          ))}
        </BreakpointMasonry>
      )}
    </div>
  );
};

export default Articles;
