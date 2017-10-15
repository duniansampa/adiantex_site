import React, { Component } from "react";
import Compliance from "./Compliance";
import BoardOfDirectors from "./BoardOfDirectors";
import { Route } from "react-router-dom";

const Governance = ({ match }) => {
  return (
    <div>
      <Route path={`${match.url}/conformidade`} component={Compliance} />
      <Route
        path={`${match.url}/conselho-e-diretoria`}
        component={BoardOfDirectors}
      />
    </div>
  );
};

export { Compliance, BoardOfDirectors };
export default Governance;
