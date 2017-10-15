import React, { Component } from "react";
import imgLogo from "../images/LogoAdianteX.jpg";
import imgPt from "../images/pt-br.png";
import imgEart from "../images/earth.png";
import imgSearch from "../images/lupa.png";
import styled from "styled-components";
import { Image, Nav, Navbar, NavItem, MenuItem } from "react-bootstrap";
import { MyNavDropdown } from "../components";
import { LanguagePane, SearchForm } from "../containers";

const IntNavbarHeader = styled(Navbar.Header)`
  &.navbar-header {
    height: 80px;
    width: 350px;
    padding: 0;
    margin: 0;
    > a.navbar-brand {
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const IntNavBar = styled(Navbar)`
  &.navbar {
    background: #3b5998;
    margin: 0;
    border-width: 0;
    border-radius: 0;
    > div.container {
      width: 1200px;
      padding: 0;
    }
  }
`;

const IntMenuItem = styled(MenuItem)`
  &[role="presentation"],
  &[role="presentation"] > a[role="menuitem"] {
    width: ${props => props.width || "auto"};
    margin: 0;
    padding: 0;
    border-bottom: 0;
    background-image: none;
    background-color: transparent;
  }
`;

const IntImage = styled(Image)`
  width: 24px;
  height: 24px;
  padding: 2px;
`;

const IntNavItem = styled(NavItem)`
  &[role="presentation"] {
    height: ${props => props.height || "80px"};
    display: flex;
    justify-content: center;
    align-items: center;
    > a[role="button"] {
      text-align: center;
      &:link,
      &:visited {
        color: white;
      }
      &:hover,
      &:active {
        color: black;
      }
      text-decoration: underline;
      font-family: monospace;
    }
  }
`;

const earthMenu = (
  <span>
    <Image src={imgEart} />
    <IntImage src={imgPt} />
  </span>
);

export default class HeaderNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IntNavBar inverse collapseOnSelect className={this.props.className}>
        <IntNavbarHeader>
          <Navbar.Brand>
            <a href="/">
              <Image src={imgLogo} alt="Logo" responsive />
            </a>
          </Navbar.Brand>
        </IntNavbarHeader>
        <Navbar.Collapse>
          <Nav bsStyle="pills" pullRight>
            <IntNavItem eventKey={1} href="/">
              Início
            </IntNavItem>
            <IntNavItem eventKey={2} href="/trabalhe-conosco">
              Trabalhe Conosco
            </IntNavItem>
            <IntNavItem eventKey={3} href="/contato">
              Contato
            </IntNavItem>
            <MyNavDropdown
              eventKey={4}
              title={earthMenu}
              noCaret
              id="nav-dropdown-earth"
            >
              <IntMenuItem eventKey={4.1}>
                <LanguagePane />
              </IntMenuItem>
            </MyNavDropdown>
            <MyNavDropdown
              eventKey={5}
              title={<Image src={imgSearch} />}
              noCaret
              id="nav-dropdown-search"
            >
              <IntMenuItem eventKey={5.1}>
                <SearchForm />
              </IntMenuItem>
            </MyNavDropdown>
          </Nav>
        </Navbar.Collapse>
      </IntNavBar>
    );
  }
}
