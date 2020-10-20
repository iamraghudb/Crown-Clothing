import React from "react";
// import "./homepage.styles.scss";
import { HomePageContainer } from "./homepage.styles";
import Directory from "./directory.component";
const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
