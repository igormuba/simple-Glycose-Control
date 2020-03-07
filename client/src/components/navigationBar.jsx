import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'

class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar variant="dark" bg="dark">
          <Navbar.Brand href="#home">SGC</Navbar.Brand>
          <Nav className="mr-auto">

            <NavLink className="navbar-dark navbar-nav nav-link " exact to="/">Medir</NavLink>
            <NavLink className="navbar-dark navbar-nav nav-link " exact to="/diariocontrole">Diario</NavLink>





          </Nav>

        </Navbar>

      </>
    );
  }
}

export default NavigationBar;