import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "./Features/MovieList";
import { PersonList } from "./Features/PersonList";
import Navigation from "./Features/Navigation";
import { PersonDetails } from "./Features/PersonDetails";
const App = () => (
  <HashRouter>
    <Navigation />

    <Switch>
      <Route path="/person/:id">
        <PersonDetails />
      </Route>
      <Route path="/people">
        <PersonList />
      </Route>
      <Route path="/movies">
        <MovieList />
      </Route>
      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;