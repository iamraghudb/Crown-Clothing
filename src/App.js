import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/homepage.component";
import ShopPage from "./components/shop.component";
import Header from "./components/header.component";
import SignInSignUpPage from "./components/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
          {/* <HomePage /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
