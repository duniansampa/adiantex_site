import React, { Component } from "react";
import { Route } from "react-router-dom";
import SearchPage from "./SearchPage";

const Search = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={SearchPage} />
    </div>
  );
};

export { SearchPage };
export default Search;
