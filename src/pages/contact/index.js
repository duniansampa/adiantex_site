import React, { Component } from "react";
import { Route } from "react-router-dom";
import ContactPage from "./ContactPage";

const Contact = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={ContactPage} />
    </div>
  );
};

export { ContactPage };
export default Contact;
