import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AboutAdiantex from "./AboutAdiantex";

const Adiantex = ({ match }) => {
  return (
    <div>
      <Route path={`${match.url}/sobre-a-adiantex`} component={AboutAdiantex} />
      <Redirect
        from={`${match.url}/historia`}
        to={`${match.url}/sobre-a-adiantex`}
      />
    </div>
  );
};

export { AboutAdiantex, History };
export default Adiantex;
