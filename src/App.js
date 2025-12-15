import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import { fetchPopularMovies } from './Features/globalSlice';
import MovieList from './Features/MovieList';

const StartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return <MovieList />;
};

const App = () => (
  <Switch>
    <Route exact path="/" component={StartPage} />
    <Route path="/movies" component={MovieList} />
    <Redirect to="/" />
  </Switch>
);

export default App;