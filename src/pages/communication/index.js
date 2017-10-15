import React, { Component } from "react";
import { Route } from "react-router-dom";
import News from "./News";
import SocialMedia from "./SocialMedia";

const Communication = ({ match }) => {
  return (
    <div>
      <Route path={`${match.url}/noticias`} component={News} />
      <Route path={`${match.url}/redes-sociais`} component={SocialMedia} />
    </div>
  );
};

export { News, SocialMedia };
export default Communication;
