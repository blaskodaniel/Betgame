import React, { Component } from 'react';
import {AppConfig} from '../../_helpers/application-config';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {
  Badge,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout(){
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" sticky="top" fixed="top">
          <NavbarBrand href="/">VB2020 Tippjáték <Badge color="info" pill>ver. {AppConfig.version}</Badge></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink activeClassName="active" className="nav-link text-white" to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="active" className="nav-link text-white" to="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  Profil
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.logout}>
                    Kilépés
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(connect(null,null)(MainMenu));
