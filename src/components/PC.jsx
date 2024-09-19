import React from 'react'
import { Container, Row, Col, Image, Accordion ,ListGroup, ListGroupItem} from 'react-bootstrap';

function PC() {
  return (
    <Container fluid className="p-5">
    <Row className="justify-content-center">
     
      <Col md={6}>
        
        <Image
          src="../Contact-company/assets/img/Contact.png" 
          alt="SIAME Warehouse"
          fluid
          className="shadow-sm"
          
        />
      </Col>

      
      <Col md={6}>
        <h2 className="mb-4">Discover the Contact</h2>
        <p>Founded in 1998, Contact is a subsidiary of SIAME and is proud to operate under the full exporter regime. With a production facility spanning 4800 m² and certified under IATF 16949 and ISO 14001, we have built a reputation for excellence in plastic injection molding and assembly services. Our commitment to continuous growth, flexibility, and quality makes us a trusted partner for the automotive, electronics, and rail industries.</p>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Our Histoire</Accordion.Header>
            <Accordion.Body>
            Came into the market place late 1998.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Our Activities</Accordion.Header>
            <Accordion.Body>
              Specialized in the injection and the assembly of various types of connectors for the
              electronics and automotive industries for foreign customers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Workshop</Accordion.Header>
            <Accordion.Body>
            A dedicated mold maintenance shop offering optimized conditions for quick setup
            changes.New molds construction projects are entrusted to the best in class Asian makers.
            Repairs are granted locally by our approved partners.CONTACT has assembled
            various products designed by the major market
            players.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Achievements</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroupItem>IATF 16949 ( ISO TS 16949 since 2006) </ListGroupItem>
                <ListGroupItem>ISO 14001</ListGroupItem>

              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </Col>
    </Row>
  </Container>
  )
}

export default PC
