import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" render={() => <Main />} />
      </Switch>
    </>
  );
}

export default App;
