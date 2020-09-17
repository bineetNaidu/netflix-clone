import React from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
