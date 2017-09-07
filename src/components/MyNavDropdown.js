import React from 'react'
import { NavDropdown } from 'react-bootstrap';

class MyNavDropdown extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const {
     children,
     ...props
    } = this.props;
    
    return (
      <NavDropdown
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        open={this.state.isOpen}
        {...props}
      >
      {this.props.children}
      </NavDropdown>
    )
  }
}

NavDropdown.propTypes = NavDropdown.PropTypes;

export default MyNavDropdown;