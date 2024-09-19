import React from 'react';
import { Navbar, Container, Nav , NavDropdown} from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar variant='top'  className='navbar' style={{backgroundColor: 'whitesmoke',position: 'sticky',top: '0',zIndex: '1'}}   expand="lg" >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../assets/img/contact.png"
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="Contact logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <NavDropdown title="À Propos" id="basic-nav-dropdown">
              <NavDropdown.Item href="PC">À Propos de la Contact</NavDropdown.Item>
              <NavDropdown.Item href="NF">Nos Clients</NavDropdown.Item>
              <NavDropdown.Item href="QE">Qualité & Environnement</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="media">Media</Nav.Link>
            <Nav.Link href="careers">Carrer</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar; 