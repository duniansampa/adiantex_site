import React, { Component } from "react";
import { Route } from "react-router-dom";
import CareersPage from "./CareersPage";

const Careers = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={CareersPage} />
    </div>
  );
};

export { CareersPage };
export default Careers;
