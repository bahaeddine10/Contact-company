import React from 'react';
import { Row, Col, Container, Image, Carousel, Card, Badge } from 'react-bootstrap';
import Contact from './contact';
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container fluid="lg">
          <Badge bg="light" className="hero-badge px-3 py-2 mb-3 fw-semibold">
            Precision Manufacturing Excellence
          </Badge>
          <h1 className="hero-title display-4 fw-bold mb-3">
            Welcome to <span className="text-gradient">Contact Company</span>
          </h1>
          <p className="hero-subtitle lead mx-auto mb-4">
            A leader in high-precision injection molding and technical assembly solutions.
          </p>

          <Row className="justify-content-center g-3 mt-4">
            <Col xs={6} md={3}>
              <div className="stat-card p-3 rounded-4">
                <h3 className="fw-bold mb-1 text-gradient">25+</h3>
                <p className="text-muted small mb-0">Years Experience</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-card p-3 rounded-4">
                <h3 className="fw-bold mb-1 text-gradient">160+</h3>
                <p className="text-muted small mb-0">Dedicated Experts</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-card p-3 rounded-4">
                <h3 className="fw-bold mb-1 text-gradient">4,800 m²</h3>
                <p className="text-muted small mb-0">Facility Area</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-card p-3 rounded-4">
                <h3 className="fw-bold mb-1 text-gradient">24/7</h3>
                <p className="text-muted small mb-0">Shift Operations</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Us & Carousel Section */}
      <section className="section-padding bg-light-blue">
        <Container fluid="lg">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="pe-lg-3">
                <span className="section-subtitle">Who We Are</span>
                <h2 className="section-title mb-4">Pioneering Industrial Quality Since 1998</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Founded in 1998, <strong>Contact</strong> is a subsidiary of SIAME operating under the full exporter regime. Certified under <strong>IATF 16949</strong> and <strong>ISO 14001</strong>, we have built an outstanding reputation for quality in plastic injection molding and automated assembly.
                </p>
                <div className="d-flex gap-2 flex-wrap mb-2">
                  <span className="badge-chip">IATF 16949 Certified</span>
                  <span className="badge-chip">ISO 14001 Certified</span>
                  <span className="badge-chip">SIAME Subsidiary</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="carousel-wrapper rounded-4 overflow-hidden shadow-lg">
                <Carousel fade indicators={true} controls={true}>
                  <Carousel.Item>
                    <img className="d-block w-100 carousel-img" src="/assets/img/image27.png" alt="Facility Overview" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100 carousel-img" src="/assets/img/image28.png" alt="Production Line" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Cards */}
      <section className="section-padding">
        <Container fluid="lg">
          <div className="text-center mb-5">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Technical Services</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              High-performance manufacturing capabilities engineered to satisfy rigorous international standards.
            </p>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="service-card border-0 h-100 p-4">
                <Card.Body className="d-flex flex-column p-0">
                  <div className="service-icon mb-3">01</div>
                  <Card.Title className="fw-bold mb-3">Plastic Injection Molding</Card.Title>
                  <Card.Text className="text-secondary small">
                    Hello.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="service-card border-0 h-100 p-4">
                <Card.Body className="d-flex flex-column p-0">
                  <div className="service-icon mb-3">02</div>
                  <Card.Title className="fw-bold mb-3">Ultrasonic Welding</Card.Title>
                  <Card.Text className="text-secondary small">
                    High-precision ultrasonic welding techniques tailored for specialized technical plastic assemblies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="service-card border-0 h-100 p-4">
                <Card.Body className="d-flex flex-column p-0">
                  <div className="service-icon mb-3">03</div>
                  <Card.Title className="fw-bold mb-3">Pad Printing</Card.Title>
                  <Card.Text className="text-secondary small">
                    Custom high-detail pad printing solutions designed specifically for electronic parts and components.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="service-card border-0 h-100 p-4">
                <Card.Body className="d-flex flex-column p-0">
                  <div className="service-icon mb-3">04</div>
                  <Card.Title className="fw-bold mb-3">Complex Assembly</Card.Title>
                  <Card.Text className="text-secondary small">
                    Specialized automotive and technical assembly solutions designed for high-precision demands.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-light-blue">
        <Container fluid="lg">
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-lg-2">
              <div className="location-img-card rounded-4 overflow-hidden shadow-lg position-relative">
                <Image
                  src="/assets/img/locationContact.png" 
                  alt="SIAME Warehouse Location"
                  fluid
                  className="w-100 location-img"
                />
              </div>
            </Col>

            <Col lg={6} className="order-lg-1">
              <span className="section-subtitle">DEPLOYED</span>
              <h2 className="section-title mb-4">Strategic Industrial Facility</h2>
              <p className="text-secondary mb-4">
                Situated in the heart of Grombalia’s industrial zone, we deliver connectors and automotive solutions across global markets. Our continuous 24/7 operating model guarantees reliable delivery schedules for world-class clients.
              </p>
              <div className="trusted-brands mt-4">
                <span className="d-block small text-muted mb-2 fw-semibold text-uppercase tracking-wider">Trusted Industry Partner For:</span>
                <div className="d-flex gap-2">
                  <span className="brand-badge">Audi</span>
                  <span className="brand-badge">BMW</span>
                  <span className="brand-badge">Renault</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Embedded Contact Component */}
      <section className="section-padding">
        <Container fluid="lg">
          <Contact />
        </Container>
      </section>
    </div>
  );
}

export default Home;