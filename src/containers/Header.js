import React, { Component } from "react";
import { HeaderNavBar, HeaderNav } from "../components";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="fixed-top">
        <HeaderNavBar className="HeaderNavBar" />
        <HeaderNav className="HeaderNav" />
      </header>
    );
  }
}
