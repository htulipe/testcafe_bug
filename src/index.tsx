import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Guard } from "./guard";
import { Home } from "./routes/home";
import { Login } from "./routes/login";
import { SomeRoute } from "./routes/some-route";

function App() {
  return (
    <Router>
      <Guard>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/some-route">
            <SomeRoute />
          </Route>
        </Switch>
      </Guard>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
