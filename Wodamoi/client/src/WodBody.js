import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import DurationWods from './components/Posts/DurationWods';
import { getPosts } from './actions/posts';

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
          <DurationWods setCurrentId={setCurrentId} />
        </Grid>
      </Container>
    </>
  );
};

export default App;