import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/agent/login', {
        email,
        password,
      });

      if (response.data) {
        // Save the token in local storage
        localStorage.setItem('authToken', response.data);
        alert('Login successful!');
        //navigate('/dashboard');
        navigate('/dashdashboard'); // Redirect to dashboard
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Login failed: ${error.response.data}`);
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
              <h1 className="mb-4">Login</h1>
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
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;




// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//   };

//   return (
//     <Container fluid className="text-center" style={{ height: '100vh' }}>
//       <Card className='w-50'>
//         <Card.Body>
//       <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
//         <Col xs={12} md={6} lg={4} className="p-5">
//           <h1 className="mb-4 m-2">Login</h1>
//           <Form onSubmit={handleSubmit} >
//             <Form.Group className='m-2'>
//               <Form.Label>Email:</Form.Label>
//               <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//             </Form.Group>
//             <Form.Group className='m-2'>
//               <Form.Label>Password:</Form.Label>
//               <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//             </Form.Group>
//             <Button type="submit" className='m-2'>Sign in</Button>
//           </Form>
//         </Col>
//       </Row>
//       </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default Login;