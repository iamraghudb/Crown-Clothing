import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/homepage.component";
import ShopPage from "./components/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <HomePage /> */}
      </Switch>
    </div>
  );
}

export default App;
