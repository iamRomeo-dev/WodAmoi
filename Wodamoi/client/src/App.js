import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Auth from "./components/Auth/Auth";
import Home from "./Home";
import WodTous from "./WodTous";
import WodBody from "./WodBody";
import { getPosts } from './actions/posts';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route> 

          <Route path="/auth" exact component={Auth} />

          <Route path="/workouts/:workoutDuration" exact>
            <WodBody />
          </Route>

          <Route path="/wods" exact>
            <WodTous />
          </Route> 

        </Switch>
      </BrowserRouter>
  );
};

export default App;