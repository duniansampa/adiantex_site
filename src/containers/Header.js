import React, { Component } from 'react';
import imgLogo from '../images/LogoAdianteX.jpg';
import imgPt from '../images/pt-br.png';
import imgEn from '../images/en.png';
import imgEs from '../images/es.png';
import imgEart from "../images/earth.png";
import imgSearch from "../images/lupa.png";
import { Image, Nav, Navbar, NavItem, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import MyNavDropdown from '../components/MyNavDropdown';

/*const styles = StyleSheet.create({
    container : {
        paddingTop      : 30,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : '#F5FCFF',
        flexDirection   : 'row',
        flexWrap        : 'wrap'
    },

    touchable : {
        width  : itemSize,
        height : itemSize,
        margin : 7
    },

    topBar : {
        position        : 'absolute', 
        top             : 0, 
        height          : 25, 
        width           : windowDims.width, 
        backgroundColor : 'rgba(0,0,0,.8)'
    }
});*/

function HeaderNavbarForm(props) {
  return (
    <Navbar.Collapse className="HeaderNavbarForm">
      <Navbar.Form  pullLeft>
        <FormGroup  >
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Ok</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  );
}


export class HeaderNavBar extends React.Component {
  handleOpen = () => {
    console.log("==>Open");
    this.setState({ 
      isOpenEarthNavDropdown: true,
      isOpenSearchDropdown: true 
    });
  }

  handleClose = () => {
    console.log("==>Close");
    this.setState({
      isOpenEarthNavDropdown: false,
      isOpenSearchDropdown: false
    });
  }

  render(){
    const earthMenu = (
      <span>
          <Image src={imgEart}/>
          <Image src={imgPt} width="20px" height="20px" />
      </span>
    );
    const searchMenu = (
      <Image src={imgSearch} />
    );
    return (
      <Navbar  inverse collapseOnSelect className={this.props.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
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
              className="SearchEarth" 
              id="basic-nav-earth"
            >
              <MenuItem eventKey={4.1}>Português</MenuItem>
              <MenuItem eventKey={4.2}>Inglês</MenuItem>
              <MenuItem eventKey={4.3}>Espanhol</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4}>Separated link</MenuItem>
            </MyNavDropdown>
            <MyNavDropdown
              eventKey={5}
              title={searchMenu}
              noCaret
              className="SearchEarth"
              id="basic-nav-search"
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
      <nav>
        <HeaderNavBar className="HeaderNavBar" />
        <HeaderNav className="HeaderNav" />
      </nav>
    )
  }
}

export default Header