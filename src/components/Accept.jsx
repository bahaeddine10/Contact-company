// Accept.jsx
import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const Accept = () => {
  const [demands, setDemands] = useState([]);

  // Fetching all accepted demands
  useEffect(() => {
    const fetchDemands = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          alert('You are not authenticated!');
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/alldemandsaccepted`, {
          headers: {
            Authorization: token,
          },
        });

        console.log("API Response:", response.data); // Log the response
        setDemands(response.data);
      } catch (error) {
        alert('An error occurred while fetching accepted demands.');
      }
    };

    fetchDemands();
  }, []);

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
            <th>Email</th> {/* New column for email */}
            
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
              <td>{demand.email}</td> {/* Displaying email */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Accept;
