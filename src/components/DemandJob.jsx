import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function DemandJob() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [salary, setSalary] = useState('');
  const [cv, setCv] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cv);
  };

  const handleCvChange = (event) => {
    setCv(event.target.files[0]);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="jobTitle">
              <Form.Label>Job Title:</Form.Label>
              <Form.Control type="text" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="jobDescription">
              <Form.Label>Job Description:</Form.Label>
              <Form.Control as="textarea" rows={3} value={jobDescription} onChange={(event) => setJobDescription(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="requiredSkills">
              <Form.Label>Required Skills:</Form.Label>
              <Form.Control type="text" value={requiredSkills} onChange={(event) => setRequiredSkills(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="experience">
              <Form.Label>Experience:</Form.Label>
              <Form.Control as="select" value={experience} onChange={(event) => setExperience(event.target.value)}>
                <option value="0-2 years">0-2 years</option>
                <option value="2-5 years">2-5 years</option>
                <option value="5-10 years">5-10 years</option>
                <option value="more than 10 years">more than 10 years</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="education">
              <Form.Label>Education:</Form.Label>
              <Form.Control as="select" value={education} onChange={(event) => setEducation(event.target.value)}>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="salary">
              <Form.Label>Salary:</Form.Label>
              <Form.Control type="number" value={salary} onChange={(event) => setSalary(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="cv">
              <Form.Label>Upload CV:</Form.Label>
              <Form.Control type="file" onChange={handleCvChange} />
            </Form.Group>
            <Button variant="primary" className='mt-2' type="submit">
              Submit
            </Button>
            <Button variant="primary" className='mt-2' type="rest">
              reset
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandJob;