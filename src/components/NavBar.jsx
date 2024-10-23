import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar variant='top'  className='navbar' style={{backgroundColor: 'whitesmoke',position: 'sticky',top: '0',zIndex: '1'}}   expand="lg" >
      <Container>
        <Navbar.Brand href="/Contact-company/">
          <img
            src="/Contact-company/assets/img/Contact.png"
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="Contact logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/about">About us</Nav.Link>
            
            <Nav.Link href="#/services">Services</Nav.Link>
            <Nav.Link href="#/Apply">Apply</Nav.Link>

            <Nav.Link href="#/careers">Carrer</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar; 