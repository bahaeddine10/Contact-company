import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import axios from 'axios';

const DemandForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDesc: '',
    reqSkills: '',
    experience: 0,
    education: '',
    salary: 0,
    email: '',
    file: null, // To store the CV file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append form data
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:3000/uploaddemand', data, {
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
    <form onSubmit={handleSubmit}>
      <input name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} required />
      <input name="jobDesc" placeholder="Job Description" value={formData.jobDesc} onChange={handleChange} required />
      <input name="reqSkills" placeholder="Required Skills" value={formData.reqSkills} onChange={handleChange} required />
      <input type="number" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
      <input name="education" placeholder="Education" value={formData.education} onChange={handleChange} required />
      <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="file" name="file" onChange={handleFileChange} required />
      <button type="submit">Send Demand</button>
    </form>
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