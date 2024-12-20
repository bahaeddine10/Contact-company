//i need take a look at this later
/*
import React from 'react';
import { Container , Table, Button } from 'react-bootstrap';

const Dashboard = () => {
    const demands = [
    {
        id: 1,
        cv: 'cv1.pdf',
        jobTitle: 'Job Title 1',
        jobDescription: 'Job Description 1',
        requiredSkills: 'Skill 1, Skill 2',
        experience: '2 years',
        education: 'Bachelor\'s Degree',
        salary: '50000',
      },
      {
        id: 2,
        cv: 'cv2.pdf',
        jobTitle: 'Job Title 2',
        jobDescription: 'Job Description 2',
        requiredSkills: 'Skill 3, Skill 4',
        experience: '5 years',
        education: 'Master\'s Degree',
        salary: '60000',
      },
      
    ];
    return (
        <Container fluid className="text-center" >        
        <Table responsive striped bordered hover>
        <thead>
        <tr>
          <th>CV</th>
          <th>Job Title</th>
          <th>Job Description</th>
          <th>Required Skills</th>
          <th>Experience</th>
          <th>Education</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {demands.map((demand) => (
          <tr key={demand.id}>
            <td>
              <a href={`/${demand.cv}`} target="_blank" rel="noopener noreferrer">
                {demand.cv}
              </a>
            </td>
            <td>{demand.jobTitle}</td>
            <td>{demand.jobDescription}</td>
            <td>{demand.requiredSkills}</td>
            <td>{demand.experience}</td>
            <td>{demand.education}</td>
            <td>{demand.salary}</td>
            <td>
              <Button variant="danger" size="sm">
                Delete
              </Button>
              <Button variant="success" size="sm">
                Accept
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
        </Container>
    );
};

export default Dashboard;*/
import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () => {
  const [demands, setDemands] = useState([]);

  // Fetching all demands
  useEffect(() => {
    const fetchDemands = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          alert('You are not authenticated!');
          return;
        }

        const response = await axios.get('http://localhost:3002/alldemandsnotaccepted', {
          headers: {
            Authorization: token,
          },
        });

        console.log("API Response:", response.data); // Log the response
        setDemands(response.data);
      } catch (error) {
        alert('An error occurred while fetching demands.');
      }
    };

    fetchDemands();
  }, []);

  // Handle Accept action
  const handleAccept = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('You are not authenticated!');
        return;
      }

      const response = await axios.put(`http://localhost:3002/updatedemand/${id}`, null, {
        headers: {
          Authorization: token,
        },
      });

      // Show success message
      alert(response.data.message || 'Demand accepted successfully!');
      
      // Reload the page
      window.location.reload();
    } catch (error) {
      alert('An error occurred while accepting the demand.');
    }
  };

  // Handle Delete action
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('You are not authenticated!');
        return;
      }

      const response = await axios.delete(`http://localhost:3002/deletedemand/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      // Show success message
      alert(response.data.message || 'Demand deleted successfully!');
      
      // Reload the page
      window.location.reload();
    } catch (error) {
      alert('An error occurred while deleting the demand.');
    }
  };
  // Handle file download
  const handleDownload = (file) => {
    try {
      // Decode Buffer data to Blob
      const blob = new Blob([Uint8Array.from(file.data.data)], { type: file.contentType });

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a temporary <a> element to trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = file.filename; // Use the original filename
      document.body.appendChild(link);
      link.click();

      // Clean up the URL object
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      alert('Failed to download file.');
    }
  };

  return (
    <Container fluid className="text-center">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>CV</th>
            <th>Job Title</th>
            <th>Job Description</th>
            <th>Required Skills</th>
            <th>Experience</th>
            <th>Education</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {demands.map((demand) => (
            <tr key={demand.id || demand._id}>
              <td>
                <Button
                  variant="link"
                  onClick={() => handleDownload(demand.file)}
                >
                  {demand.file.filename}
                </Button>
              </td>
              <td>{demand.jobTitle}</td>
              <td>{demand.jobDesc}</td>
              <td>{demand.reqSkills}</td>
              <td>{demand.experience}</td>
              <td>{demand.education}</td>
              <td>{demand.salary}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(demand.id || demand._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => handleAccept(demand.id || demand._id)}
                >
                  Accept
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
