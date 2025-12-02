import { Switch, Route, Redirect } from "react-router-dom";

const App = () => (
  <Switch>
    {/* TRASA STARTOWA: To jest domyślne miejsce, gdzie zaczniemy  */}
    <Route path="/start">
      <h1>Witaj, Zespole INSYGNIA ŚMIERCI!</h1>
      <p>Szkielet projektu gotowy. Zastąpimy ten widok naszym projektem .</p>
    </Route>

    {/* Przekierowanie głównego URL na trasę startową */}
    <Route path="/">
      <Redirect to="/start" />
    </Route>
  </Switch>
);

export default App;