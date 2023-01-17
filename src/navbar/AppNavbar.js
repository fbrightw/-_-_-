import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";

function AppNavbar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#analytics">Analytics</Nav.Link>
            <Nav.Link href="#actios">Actions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default AppNavbar;