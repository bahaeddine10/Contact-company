import React, { useState } from 'react';
import { Form, Button, Container, Row, Col ,Card} from 'react-bootstrap';

import axios from 'axios';

const DemandForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDesc: '',
    reqSkills: '',
    experience: 0,
    education: '',
    salary: 0,
    accepted:false,
    email: '',
    cv: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] }); // use 'cv' instead of 'file'
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append form data
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:3002/uploaddemand', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Demand sent successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      alert('Error sending demand. Check console for details.');
      console.error(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Send Demand</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="jobTitle">
                  <Form.Label>Job Title:</Form.Label>
                  <Form.Control type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="jobDesc">
                  <Form.Label>Job Description:</Form.Label>
                  <Form.Control as="textarea" name="jobDesc" value={formData.jobDesc} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="reqSkills">
                  <Form.Label>Required Skills:</Form.Label>
                  <Form.Control type="text" name="reqSkills" value={formData.reqSkills} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="experience">
                  <Form.Label>Experience:</Form.Label>
                  <Form.Control type="number" name="experience" value={formData.experience} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="education">
                  <Form.Label>Education:</Form.Label>
                  <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="salary">
                  <Form.Label>Salary:</Form.Label>
                  <Form.Control type="number" name="salary" value={formData.salary} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="cv">
                    <Form.Label>Upload CV:</Form.Label>
                     <Form.Control type="file" name="cv" onChange={handleFileChange} required />
                </Form.Group>


                <Button type="submit">Send Demand</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DemandForm;

/*
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
    const templateParams = {
      jobTitle,
      jobDescription,
      requiredSkills,
      experience,
      education,
      salary,
      cv
    };
    emailjs.send(
      'service_mykss0g',
      'template_yckzbbg',
      templateParams,
      'uUrjQ5qmovh6LnfOR'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.error('FAILED...', err);
    });
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
            <Button variant="primary" className='mt-2 me-2' type="submit">
              Submit
            </Button>
            <Button variant="primary" className='mt-2 ms-2' type="rest">
              reset
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DemandJob;*/