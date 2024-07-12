import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar bg="light" style={{height: '6vh'}} >
      <Container>
        <Navbar.Brand>GIS 2024</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/'} >Main</Nav.Link>
            <Nav.Link as={NavLink} to={'/clipper'} >Editor</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      )
}

      export default MyNavbar