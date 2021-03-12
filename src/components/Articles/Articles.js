import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

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

  const [allArticles, setAllArticles] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${user.username}`)
      .then((response) => response.json())
      .then((data) => {
        setAllArticles(data);
        setPagesCount(Math.ceil(data.length / 3));
      });
  }, []);

  useEffect(() => {
    if (!allArticles) return;

    setArticles(allArticles.filter(
      (article, index) => index >= 3 * (page - 1) && index < 3 * page
    ));
  }, [allArticles, page]);

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item>
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
        </Grid>
        <Grid item>
          <Pagination
            count={pagesCount}
            page={page}
            onChange={(event, page) => setPage(page)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Articles;
