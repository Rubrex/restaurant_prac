import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import {NavLink} from 'react-router-dom'

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    }
  }
  navToggle=()=>{
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
  render () {
    return(
      <div>
        <Navbar dark color="dark" expand="sm">
          <div className="container">
            <NavbarToggler onClick={this.navToggle}/>
            <NavbarBrand href="/">Bohubrohi Restaurant</NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink exact to="/" className="nav-link">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/menu" className="nav-link">Menu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/about" className="nav-link">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            
          </div>
        </Navbar>
    </div>
    )
   
  };
};

export default Navigation;
