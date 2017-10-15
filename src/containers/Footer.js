import React, { Component } from "react";
import styled from "styled-components";

const IntFooter = styled.footer`
  background-color: #7b7573;
  border-top: 1px solid #e7e7e7;
  text-align: center;
  padding: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

export default class Footer extends Component {
  render() {
    return (
      <IntFooter>
        <div className="container">
          <p className="text-muted">Place sticky footer content here.</p>
        </div>
      </IntFooter>
    );
  }
}
