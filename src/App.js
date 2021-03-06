import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import HomePage from "./components/homepage.component";
import ShopPage from "./components/shop.component";
import Header from "./components/header.component";
import SignInSignUpPage from "./components/sign-in-and-sign-up.component";

import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./components/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
