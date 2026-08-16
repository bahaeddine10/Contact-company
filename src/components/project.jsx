
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import API_BASE_URL from '../config/api';
import { extractUniqueEmails } from '../utils/emailUtils';

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
        const loadProjectPageData = async () => {
            await fetchProjects();
            await fetchEmployeeEmails();
        };

        loadProjectPageData();
    }, []);

    const fetchProjects = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                alert('You are not authenticated!');
                return;
            }
            const response = await axios.get(`${API_BASE_URL}/project/all`, {
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
            const response = await axios.get(`${API_BASE_URL}/alldemandsaccepted`, {
                headers: {
                  Authorization: token,
                },
            });
            setEmployeeEmails(extractUniqueEmails(response.data));
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

        if (!newProject.title.trim() || !newProject.description.trim()) {
            alert('Title and description are required.');
            return;
        }

        if (!newProject.employees || newProject.employees.length === 0) {
            alert('Please select at least one employee before creating a project.');
            return;
        }

        try {
            const token = localStorage.getItem('authToken');
        if (!token) {
          alert('You are not authenticated!');
          return;
        }
            await axios.post(`${API_BASE_URL}/project/create`, {
                ...newProject,
                title: newProject.title.trim(),
                description: newProject.description.trim(),
                employees: [...new Set(newProject.employees)]
            }, {
                headers: {
                  Authorization: token,
                  'Content-Type': 'application/json',
                },
              });
            await fetchProjects();
            setNewProject({ title: '', description: '', employees: [] });
            alert('Project created successfully!');
        } catch (error) {
            console.error('Error creating project', error);
            alert(error?.response?.data || 'Error creating project');
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
                                        className="form-select"
                                        value={selectedEmail}
                                        onChange={(e) => setSelectedEmail(e.target.value)}
                                    >
                                        <option value="">Select an employee</option>
                                        {employeeEmails.map((email, index) => (
                                            <option key={index} value={email}>{email}</option>
                                        ))}
                                    </select>
                                    <div>
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