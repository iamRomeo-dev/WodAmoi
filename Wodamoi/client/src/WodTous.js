import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/TousWods';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
      </Container>
    </>
  );
};

export default App;