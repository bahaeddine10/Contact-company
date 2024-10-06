import React ,{useState}from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';

function Comment(idEm,nom) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      to_name: 'Your Name', // Replace with your name
      subject: subject,
      message_html: message,
      reply_to: email,
    };

    emailjs.send(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      templateParams,
      'YOUR_USER_ID' 
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
        <Form.Label>Project</Form.Label>
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
  )
}

export default Comment
