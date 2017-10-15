import React, { Component } from "react";
import { ControlledCarousel } from "../../components";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ControlledCarousel />
        <div width="auto">
          <p>{" Pesquisa "}</p>
        </div>
      </div>
    );
  }
}
