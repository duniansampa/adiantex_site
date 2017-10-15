import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { Header, Footer } from "./containers";

import {
  Home,
  Careers,
  Contact,
  Search,
  Adiantex,
  Vision,
  Solutions,
  Governance,
  Communication
} from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/pt-br" />
            <Route exact path="/pt-br" component={Home} />
            {/* Header Menu */}
            <Route path="/trabalhe-conosco" component={Careers} />
            <Route path="/pesquisa" component={Search} />
            <Route path="/contato" component={Contact} />
            {/* Menu */}
            <Route path="/a-adiantex" component={Adiantex} />
            <Route path="/visao-de-futuro" component={Vision} />
            <Route path="/solucoes" component={Solutions} />
            <Route path="/governanca" component={Governance} />
            <Route path="/comunicacao" component={Communication} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
