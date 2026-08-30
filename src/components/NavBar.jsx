import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar py-3">
      <Container>
        <Navbar.Brand href="#/" className="d-flex align-items-center">
          <img
            src="/assets/img/Contact.png"
            height="36"
            className="d-inline-block align-top brand-logo"
            alt="Company logo"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none px-0" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto align-items-center gap-lg-3 my-3 my-lg-0">
            <Nav.Link href="#/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#/about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link href="#/services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="#/apply" className="nav-link-custom">Apply</Nav.Link>
            <Nav.Link href="#/careers" className="nav-link-custom">Careers</Nav.Link>
            <Nav.Link href="#/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2">
            <Button 
              className="btn-modern px-4 py-2"
              onClick={() => window.location.href = '#/login'}
            >
              Log In
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;