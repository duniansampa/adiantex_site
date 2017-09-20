import React, { Component } from 'react';
import imgLogo from '../images/LogoAdianteX.jpg';
import imgPt from '../images/pt-br.png';
import imgEart from "../images/earth.png";
import imgSearch from "../images/lupa.png";
import styled from 'styled-components';
import { Image, Nav, Navbar, NavItem, MenuItem} from 'react-bootstrap';
import { MyNavDropdown} from '../components';
import { LanguagePane, SearchForm } from '../containers'

class HeaderNavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){

    const IntNavbarHeader =  styled(Navbar.Header)`
      &.navbar-header{
        height: 80px;
        width: 350px;
        padding: 0;
        margin: 0;
        > a.navbar-brand{
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    `
    const IntNavBar = styled(Navbar)`
      &.navbar{
        background: #3b5998; 
        margin: 0;
        border-width: 0;
        border-radius: 0;
        > div.container{
          width: 1200px;
          padding: 0;
        }
      }
    `;

    const IntMenuItem = styled(MenuItem)`
      &[role=presentation], &[role=presentation] > a[role=menuitem]{
            width: ${ (props) => props.width || 'auto'};
            margin: 0;
            padding: 0;
            border-bottom: 0;
            background-image: none;
            background-color: transparent ;
      }
    `;

    const IntImage = styled(Image)`
      width: 24px;
      height: 24px;
      padding: 2px;
    `;

    const IntNavItem = styled(NavItem)`
      &[role=presentation]{
        height: ${ (props) => props.height || '80px'};
        display: flex;
        justify-content: center;
        align-items: center;
        > a[role=button] {
          text-align: center;
          &:link, &:visited { color: white; }
          &:hover, &:active { color: black; } 
          text-decoration: underline ;
          font-family: monospace;
        }
      }
    `;

    const earthMenu = (
      <span>
          <Image src={imgEart}/>
          <IntImage src={imgPt}/>
      </span>
    );

    return (
      <IntNavBar  inverse collapseOnSelect className={this.props.className}>
        <IntNavbarHeader>
          <Navbar.Brand>
            <a href="#">
              <Image src={imgLogo} alt="Logo" responsive />
            </a>
          </Navbar.Brand>
        </IntNavbarHeader> 
        <Navbar.Collapse>
          <Nav bsStyle="pills" pullRight >
            <IntNavItem eventKey={1} href="#">Inicio</IntNavItem>
            <IntNavItem eventKey={2} href="#">Trabalhe Conosco</IntNavItem>
            <IntNavItem eventKey={3} href="#">Contato</IntNavItem>
            <MyNavDropdown  eventKey={4} title={ earthMenu } noCaret id="nav-dropdown-earth" >
              <IntMenuItem eventKey={4.1} >
                <LanguagePane />
              </IntMenuItem>
            </MyNavDropdown>
            <MyNavDropdown eventKey={5} title={<Image src={imgSearch}/>} noCaret  id="nav-dropdown-search">
              <IntMenuItem eventKey={5.1}  >
                <SearchForm />
              </IntMenuItem>
            </MyNavDropdown>
          </Nav>
        </Navbar.Collapse>
      </IntNavBar>
    );
  }
}

class HeaderNav extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const IntNav = styled(Nav)`
        &.nav {
          background: #8b9dc3;
          display: flex;
          justify-content: center;
          border: 0;
        }
    `;
    
    const myWidth = '228px';
    const myHeight = '60px';

    const IntMenuItem = styled(MenuItem)`
      &[role=presentation]{
        height: 43px;
        width: ${myWidth};
        display: flex;
        justify-content: center;
        align-items: center;
        > a[role=menuitem]{
            color: white;
            height: 43px;
            line-height: 43px;
            width: ${myWidth};
            padding-left: 10px;
            background-image: none;
            background-color: transparent ;
            border-bottom-color: rgba(0,0,0,.07);
            border-bottom-width: 1px;
            border-bottom-style: solid;
            &:hover {
              background-color: #D6D6D6;
              color: black;
            }
        }
      }
    `;

    return (
      <IntNav bsStyle="tabs" >
        <MyNavDropdown itemDivider noCaret eventKey={1} height={myHeight}  width={myWidth}  title="A ADIANTEX" id="nav-dropdown-aadiantex">
          <IntMenuItem eventKey={2.1} href="#">Sobre a AdianteX</IntMenuItem>
          <IntMenuItem eventKey={2.1} href="#">História</IntMenuItem>
        </MyNavDropdown>
        <MyNavDropdown itemDivider eventKey={2} height={myHeight}  width={myWidth}  title="VISÃO DE FUTURO" id="nav-dropdown-vfuturo">
          <IntMenuItem eventKey={2.1} href="#">Pessoas de Conhecimento</IntMenuItem>
          <IntMenuItem eventKey={2.2} href="#">Tecnologia e Inovação</IntMenuItem>
          <IntMenuItem eventKey={2.3} href="#">Produtividade</IntMenuItem>
        </MyNavDropdown>
        <MyNavDropdown itemDivider eventKey={3} height={myHeight}  width={myWidth}  title="SOLUÇÕES" id="nav-dropdown-solucao">
          <IntMenuItem eventKey={3.1}>Internet das Coisas</IntMenuItem>
          <IntMenuItem eventKey={3.2}>Telemetria </IntMenuItem>
          <IntMenuItem eventKey={3.3}>Rastreamento de Carga</IntMenuItem>
          <IntMenuItem eventKey={3.4}>Automação Residencial</IntMenuItem>
          <IntMenuItem eventKey={3.4}>Nossos Serviços</IntMenuItem>
        </MyNavDropdown>
        <MyNavDropdown itemDivider eventKey={4} height={myHeight}  width={myWidth}  title="GOVERNANÇA" id="nav-dropdown-governanca">
          <IntMenuItem eventKey={4.1} href="#">Conformidade</IntMenuItem>
          <IntMenuItem eventKey={4.1} href="#">Conselho e Diretoria</IntMenuItem>
        </MyNavDropdown>
        <MyNavDropdown eventKey={5} height={myHeight}  width={myWidth}  title="COMUNICAÇÃO" id="nav-dropdown-comunicacao">
          <IntMenuItem eventKey={5.1} href="#">Notícias</IntMenuItem>
          <IntMenuItem eventKey={5.1} href="#">Redes Sociais</IntMenuItem>
        </MyNavDropdown>
      </IntNav>
    );
  }
}

export default class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <header className="fixed-top" >
        <HeaderNavBar className="HeaderNavBar" />
        <HeaderNav className="HeaderNav" />
      </header>
    )
  }
}
