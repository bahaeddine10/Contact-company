import React, { useState } from 'react';
import { Row, Col, Button, Card, Form, Alert, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    const templateParams = {
      from_name: name,
      to_name: 'oc',
      subject: subject,
      message_html: message,
      reply_to: email,
    };

    emailjs
      .send(
        'service_mykss0g', // Your EmailJS service ID
        'template_57p81sn', // Your EmailJS template ID
        templateParams,
        'uUrjQ5qmovh6LnfOR' // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSent(true);
          setLoading(false);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (err) => {
          console.log('FAILED...', err);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="text-center mb-5">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Let’s Start a Conversation</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Have a question about our injection molding or assembly services? Send us a message and our team will respond shortly.
        </p>
      </div>

      <Row className="g-4 align-items-stretch">
        {/* Contact Information Card */}
        <Col lg={5}>
          <Card className="contact-info-card border-0 h-100 p-4 p-md-5">
            <Card.Body className="d-flex flex-column justify-content-between p-0">
              <div>
                <h3 className="fw-bold mb-3 text-white">Contact Information</h3>
                <p className="text-white-50 mb-4 small">
                  Reach out directly via phone or email, or drop by our facility during working hours.
                </p>

                <div className="contact-info-list d-flex flex-column gap-4 my-4">
                  <div className="contact-item d-flex align-items-center gap-3">
                    <div className="contact-icon-box">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <span className="d-block text-white-50 small">Phone Numbers</span>
                      <a href="tel:+21672213636" className="contact-link">
                        (+216) 72 213 636
                      </a>
                      <span className="text-white-50 mx-1">/</span>
                      <a href="tel:+21672256755" className="contact-link">
                        72 256 755
                      </a>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-center gap-3">
                    <div className="contact-icon-box">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <span className="d-block text-white-50 small">Email Address</span>
                      <a
                        href="mailto:contact.commercial@contact.com.tn"
                        className="contact-link"
                      >
                        contact.commercial@contact.com.tn
                      </a>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-center gap-3">
                    <div className="contact-icon-box">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div>
                      <span className="d-block text-white-50 small">Location</span>
                      <span className="text-white fw-medium">
                        Industrial Zone, Grombalia, Tunisia
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-footer-badge pt-4">
                <span className="badge-chip-dark">24/7 Operations Support</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form Card */}
        <Col lg={7}>
          <Card className="contact-form-card border-0 h-100 p-4 p-md-5">
            <Card.Body className="p-0">
              <h3 className="fw-bold mb-4 text-dark">Send Us a Message</h3>

              {sent && (
                <Alert variant="success" className="custom-alert mb-4">
                  ✨ Email sent successfully! We will get back to you soon.
                </Alert>
              )}

              {error && (
                <Alert variant="danger" className="custom-alert mb-4">
                  Something went wrong. Please try again later.
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="name">
                      <Form.Label className="custom-label">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="John Doe"
                        className="custom-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label className="custom-label">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@company.com"
                        className="custom-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="subject">
                  <Form.Label className="custom-label">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="How can we help you?"
                    className="custom-input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label className="custom-label">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us more about your project requirements..."
                    className="custom-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-submit-modern py-3 px-4 mt-2 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FontAwesomeIcon icon={faPaperPlane} className="small" />
                    </>
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;