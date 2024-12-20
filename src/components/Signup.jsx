import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/agent/register', {
        email,
        password,
      });

      // Check the response
      if (response.data.email) {
        alert(`You have successfully signed up with the email: ${response.data.email}`);
        navigate('/login'); // Redirect to login after successful signup
      } else {
        alert('Unexpected response from the server.');
      }
    } catch (error) {
      if (error.response && error.response.data === 'user already exist') {
        alert('User already exists. Please use a different email.');
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <Container fluid className="text-center" style={{ height: '100vh' }}>
      <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
        <Col xs={12} md={6} lg={4}>
          <Card className="p-5">
            <Card.Body>
              <h1 className="mb-4">Sign Up</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit" className="mt-3">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
