import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";

function AppNavbar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href='/#/home'>Home</Nav.Link>
            <Nav.Link href='/#/analytics'>Analytics</Nav.Link>
            <Nav.Link href='/#/actions'>Actions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default AppNavbar;