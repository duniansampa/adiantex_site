import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";

const Home = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={HomePage} />
    </div>
  );
};

export { HomePage };
export default Home;
