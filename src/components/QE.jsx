import React from 'react'
import { Container, Row, Col, Card , Accordion, ListGroup, ListGroupItem} from 'react-bootstrap';

function QE() {
  return (
    <Container fluid className="p-5 bg-light">
    {/* Header Section */}
    <Row className="mb-4">
      <Col className="text-center">
        <h1 className="display-4">Qualité & Environnement</h1>
        <p className="lead">Découvrez Notre politique</p>
      </Col>
    </Row>
    
    {/* Main Content Section */}
    <Row className="justify-content-center">
      <Col md={8}>
        <Card className="shadow-sm">
          <Card.Body>
            <h2>Politique Qualité, Sécurité & Environnement</h2>
            <p>
            
            </p>

            {/* Strategic Pillars Section */}
            <h3>Nos Piliers Stratégiques</h3>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Plastic injection molding:</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                      <ListGroupItem>
                        1. Injection of automotive parts
                        </ListGroupItem>
                        <ListGroupItem>
                        2. Injection of technical plastic parts
                        </ListGroupItem>
                  </ListGroup>
                    
                </Accordion.Body>
                
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Ultrasonic welding</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroupItem>
                        1. Welding of technical plastic parts
                        </ListGroupItem>
                  </ListGroup>
                    
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Pad printing:</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroupItem>
                        1. Printing of electrical parts
                        </ListGroupItem>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>4. Assembling (Connectivity parts):</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroupItem>
                        1. Automotive parts assembling
                        </ListGroupItem>
                        <ListGroupItem>
                        2. Technical plastic parts assembling
                        </ListGroupItem>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>5.Notre Engagement:</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroupItem>
                        1. IATF
                        </ListGroupItem>
                        <ListGroupItem>
                        2. ISO 9001
                        </ListGroupItem>
                        <ListGroupItem>
                        3. ISO 14001
                        </ListGroupItem>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            
            </Accordion>
          </Card.Body>
        </Card>
      </Col>

      {/* Image Section */}
      <Col md={4} className="d-flex justify-content-center align-items-center">
        <img
          src="path/to/your/image.png"
          alt="Quality, Security, and Environment"
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
  )
}

export default QE