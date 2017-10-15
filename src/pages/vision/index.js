import React, { Component } from "react";
import { Route } from "react-router-dom";
import KnowledgeablePeople from "./KnowledgeablePeople";
import TechAndInnovation from "./TechAndInnovation";
import Productivity from "./Productivity";

const Solutions = ({ match }) => {
  return (
    <div>
      <Route
        path={`${match.url}/pessoas-de-conhecimento`}
        component={KnowledgeablePeople}
      />
      <Route
        path={`${match.url}/tecnologia-e-inovacao`}
        component={TechAndInnovation}
      />
      <Route path={`${match.url}/produtividade`} component={Productivity} />
    </div>
  );
};

export { KnowledgeablePeople, TechAndInnovation, Productivity };
export default Solutions;
