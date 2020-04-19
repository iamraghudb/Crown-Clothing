import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "./sign-in.component";
import SignUp from "./sign-up.component";
const SignInSignUpPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
