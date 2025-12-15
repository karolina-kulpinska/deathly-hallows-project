import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { fetchPopularMovies } from "./Features/globalSlice";
import MovieList from "./Features/MovieList";
import Navigation from "./Features/Navigation";

const StartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return <MovieList />;
};

const App = () => (
  <>
    <Navigation />

    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route path="/movies" component={MovieList} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
