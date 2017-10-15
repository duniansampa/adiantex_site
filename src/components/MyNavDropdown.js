import React from "react";
import styled from "styled-components";
import { NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";

const IntNavDropdown = styled(NavDropdown)`
  &.dropdown {
    width: ${props => props.width || "80px"};
    height: ${props => props.height || "80px"};
    margin: 0;
    > a[role="button"] {
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      border: 0;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 15px;
      font-family: sans-serif;
    }
    &.open > a,
    &:focus,
    &.open > a:focus,
    &.open > a:hover,
    &.open > a:active {
      border-radius: 0;
      border-width: 0;
      background-image: none;
      background-color: #6666ff;
    }
    > ul.dropdown-menu {
      background-color: ${props => props.bgColor || "#6666FF"};
      padding: 0px;
      border: 0;
      margin: 0;
      border-bottom: ${props => (props.isButton ? "0px" : "3px")} solid #3b5998;
    }
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: auto;
      content: "";
      margin: auto;
      width: ${props => (props.itemDivider ? "1px" : "0px")};
      height: 50%;
      background-color: white;
    }
  }
`;

export default class MyNavDropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  handleToggle = () => {};

  render() {
    const { children, itemDivider, ...props } = this.props;

    return (
      <IntNavDropdown
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        open={this.state.isOpen}
        onToggle={this.handleToggle}
        {...props}
        itemDivider={itemDivider}
      >
        {this.props.children}
      </IntNavDropdown>
    );
  }
}

// Specifies the default values for props:
MyNavDropdown.defaultProps = {
  itemDivider: false,
  isButton: false
};

MyNavDropdown.propTypes = {
  ...NavDropdown.propTypes,
  bgColor: PropTypes.string,
  itemDivider: PropTypes.bool,
  isButton: PropTypes.bool
};
