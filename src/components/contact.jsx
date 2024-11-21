import React,{useState} from 'react'
import { Row, Col, Button, Container  , Card,ListGroup, ListGroupItem , Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faMailBulk } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      to_name: 'oc', 
      subject: subject,
      message_html: message,
      reply_to: email,
    };

    emailjs.send(
      'service_mykss0g', // Replace with your EmailJS service ID
      'template_57p81sn', // Replace with your EmailJS template ID
      templateParams,
      'uUrjQ5qmovh6LnfOR' // Replace with your EmailJS user ID
    )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSent(true);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  };
  return (
    
      <Container fluid className="p-5">
    <Row className="justify-content-center g-2">
      
      <Col md={6}>
      <Card className="shadow-sm">
          <Card.Body>
            <h2 className="mb-4">Contact us</h2>
            <ListGroup>
            <ListGroupItem><FontAwesomeIcon icon={faPhone}  /> (+216) 72 213 636</ListGroupItem>
            <ListGroupItem><FontAwesomeIcon icon={faPhone}  /> (+216) 72 256 755</ListGroupItem>
            <ListGroupItem><FontAwesomeIcon icon={faMailBulk}  /> <a href="mailto:contact.commercial@contact.com.tn" className='text-decoration-none text-black'>contact.commercial@contact.com.tn </a></ListGroupItem>
            </ListGroup>
            
            </Card.Body>
        </Card>
        
      </Col>

      
      <Col md={6}>
      <Card className="shadow-sm">
          <Card.Body>
          <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" className="mt-3" type="submit">
        Submit
      </Button>
      {sent && (
        <p style={{ color: 'green' }}>Email sent successfully!</p>
      )}
    </Form>
            </Card.Body>
        </Card>
        
        
      </Col>
    </Row>
  </Container>
   
  )
}

export default Contact;
