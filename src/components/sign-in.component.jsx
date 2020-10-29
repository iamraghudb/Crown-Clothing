import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";

import { googleSignInStart } from "../redux/user/user.actions";

import { connect } from "react-redux";
import { emailSignInStart } from "./../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit">
            SIGN IN
          </CustomButton>
          <CustomButton
            tyep="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
