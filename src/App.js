import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </>
  );
}

export default App;
