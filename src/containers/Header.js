import React, { Component } from 'react';
import imgLogo from '../images/LogoAdianteX.jpg';
import imgPt from '../images/pt-br.png';
import imgEn from '../images/en.png';
import imgEs from '../images/es.png';
import imgEart from "../images/earth.png";
import imgSearch from "../images/lupa.png";
import { Image, Nav, Navbar, NavItem, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import MyNavDropdown from '../components/MyNavDropdown';


function HeaderNavbarForm(props) {

  return (
    <form id="header-navnar-form-search">
      <Navbar.Form pullLeft>
        <FormGroup id="">
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">OK</Button>
      </Navbar.Form>
    </form> 
  );
}


export class HeaderNavBar extends React.Component {

  render(){
    const styles = {
      imgLang:{
        width:'24px',
        height:'24px',
        padding: '2px'
      },
      earthDropDown: {
          padding:'0px',
          margin:'0px',
          backgroundColor:'#EDEDED',
          listStyle:'none',
          display: 'inline'
      },
      li:{
        display: 'inline'
      }
    };
    const earthMenu = (
      <span>
          <Image src={imgEart}/>
          <Image src={imgPt} style={styles.imgLang} />
      </span>
    );
    const searchMenu = (
      <Image src={imgSearch} />
    );

    return (
      <Navbar  inverse collapseOnSelect className={this.props.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" >
              <Image src={imgLogo} alt="Logo" responsive />
            </a> 
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header> 
        <Navbar.Collapse>
          <Nav bsStyle="pills" pullRight >
            <NavItem eventKey={1} href="#">Inicio</NavItem>
            <NavItem eventKey={2} href="#">Trabalhe Conosco</NavItem>
            <NavItem eventKey={3} href="#">Contato</NavItem>
            <MyNavDropdown 
              eventKey={4} 
              title={earthMenu} 
              noCaret 
              id="basic-navbar-earth"
            >
              <MenuItem eventKey={4.1} >
                <nav id="basic-navbar-earth-dropdown-nav" style={styles.earthDropDown}>
                  <ul style={styles.earthDropDown}>
                    <li style={styles.earthDropDown}><a><img alt="" src={imgPt} style={styles.imgLang} />Português</a></li>
                    <li style={styles.earthDropDown}><a><img alt="" src={imgEn} style={styles.imgLang} />English</a></li>
                    <li style={styles.earthDropDown}><a><img alt="" src={imgEs} style={styles.imgLang} />Español</a></li>
                  </ul>
                </nav>
              </MenuItem>
            </MyNavDropdown>
            <MyNavDropdown
              eventKey={5}
              title={searchMenu}
              noCaret
              id="basic-navbar-search"
            >
              <MenuItem eventKey={5.1}  >
                <HeaderNavbarForm />
              </MenuItem>
            </MyNavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function HeaderNav(props) {
  return (
    <Nav bsStyle="tabs" className={props.className}>
      <MyNavDropdown noCaret eventKey={3} title="A ADIANTEX" id="basic-nav-dropdown">
        <NavItem eventKey={1} href="#">Sobre a AdianteX</NavItem>
        <NavItem eventKey={1} href="#">História</NavItem>
        <NavItem eventKey={1} href="#">AdianteX no Mundo</NavItem>
      </MyNavDropdown>
      <MyNavDropdown noCaret eventKey={3} title="VISÃO DO FUTURO" id="basic-nav-dropdown">
        <NavItem eventKey={2} href="#">Pessoas de Conhecimento</NavItem>
        <NavItem eventKey={2} href="#">Tecnologia e Inovação</NavItem>
        <NavItem eventKey={2} href="#">Produtividade</NavItem>
      </MyNavDropdown>
      <MyNavDropdown noCaret eventKey={3} title="SERVIÇOS" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </MyNavDropdown>
      <MyNavDropdown noCaret eventKey={3} title="PRODUTOS" id="basic-nav-dropdown">
        <NavItem eventKey={1} href="#">Link Right</NavItem>
      </MyNavDropdown>
      <MyNavDropdown noCaret eventKey={3} title="GOVERNANÇA" id="basic-nav-dropdown">
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </MyNavDropdown>
      <MyNavDropdown noCaret eventKey={3} title="COMUNICAÇÃO" id="basic-nav-dropdown">
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </MyNavDropdown>
    </Nav>
  );
}

class Header extends Component {

  render() {
    return (
      <header>
        <HeaderNavBar className="HeaderNavBar" />
        <HeaderNav className="HeaderNav" />
      </header>
    )
  }
}

export default Header