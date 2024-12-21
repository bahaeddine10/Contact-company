const express = require('express');
const route = express.Router();
const projectModel = require('../models/project.model');
const jwt = require('jsonwebtoken');
// Route to create a new project*
var privatekey="#hellofromjjjj#"

// Middleware for verifying JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(400).send('You must provide a token.');
    }

    jwt.verify(token, privatekey, (err, decoded) => {
        if (err) {
            return res.status(400).send('Invalid or expired token.');
        } else {
            console.log(decoded);
            next();
        }
    });
};
route.post('/create',verifyToken, async (req, res) => {
    const { title, description, employees } = req.body;

    if (!title || !description || !employees || employees.length === 0) {
        return res.status(400).send('All fields are required!');
    }

    try {
        const newProject = await projectModel.createProject({ title, description, employees });
        res.json(newProject);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to get all projects
route.get('/all', verifyToken, async (req, res) => {
    try {
        const projects = await projectModel.getAllProjects();
        res.json(projects);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
module.exports = route;