import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <HomePage />
      </Switch>
    </div>
  );
}

export default App;