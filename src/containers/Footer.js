import React, { Component } from 'react'
import styled from 'styled-components';


class Footer extends Component {

  render() {
    const IntFooter = styled.footer`
      background-color: #7B7573;
      border-top: 1px solid #E7E7E7;
      text-align:center;
      padding:20px;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 60px;
      width: 100%;
    `;
    return (
        <IntFooter>
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </IntFooter>
    )
  }
}

export default Footer
