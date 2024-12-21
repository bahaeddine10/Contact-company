
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure this is in the same directory

const ProjectManagement = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        employees: []
    });
    const [employeeEmails, setEmployeeEmails] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState('');

    useEffect(() => {
        fetchProjects();
        fetchEmployeeEmails();
    }, []);

    const fetchProjects = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                alert('You are not authenticated!');
                return;
            }
            const response = await axios.get('http://localhost:3002/project/all',{
                headers: {
                  Authorization: token,
                },
            });
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects', error);
        }
    };

    const fetchEmployeeEmails = async () => {
        try {
            const token = localStorage.getItem('authToken');
        if (!token) {
          alert('You are not authenticated!');
          return;
        }
            const response = await axios.get('http://localhost:3002/alldemandsaccepted', {
                headers: {
                  Authorization: token,
                },
              });
            const emails = response.data.map(demand => demand.email);
            setEmployeeEmails([...new Set(emails)]); // Ensure unique emails
        } catch (error) {
            console.error('Error fetching employee emails', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleAddEmployee = () => {
        if (selectedEmail && !newProject.employees.includes(selectedEmail)) {
            setNewProject({
                ...newProject,
                employees: [...newProject.employees, selectedEmail]
            });
            setSelectedEmail('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
        if (!token) {
          alert('You are not authenticated!');
          return;
        }
            await axios.post('http://localhost:3002/project/create', newProject, {
                headers: {
                  Authorization: token,
                },
              });
            fetchProjects(); // Refresh the project list after adding a new project
            setNewProject({ title: '', description: '', employees: [] }); // Reset form
        } catch (error) {
            console.error('Error creating project', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 project-title">Project Management</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4>All Projects</h4>
                    <div className="row">
                        {projects.map((project, index) => (
                            <div className="col-md-12 mb-4" key={index}>
                                <div className="card project-card shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <h6 className="card-subtitle mb-2 text-muted">Employees:</h6>
                                        <ul className="list-group list-group-flush">
                                            {project.employees.map((email, i) => (
                                                <li key={i} className="list-group-item">{email}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="add-project-card p-4 rounded shadow-sm">
                        <h4 className="text-center">Add New Project</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={newProject.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={newProject.description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <label>Employees</label>
                                <div className="input-group mb-2">
                                    <select
                                        className="custom-select"
                                        value={selectedEmail}
                                        onChange={(e) => setSelectedEmail(e.target.value)}
                                    >
                                        <option value="">Select an employee</option>
                                        {employeeEmails.map((email, index) => (
                                            <option key={index} value={email}>{email}</option>
                                        ))}
                                    </select>
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-primary" onClick={handleAddEmployee}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                                <small className="form-text text-muted">Current Employees: {newProject.employees.join(', ')}</small>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-success btn-block">Create Project</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;