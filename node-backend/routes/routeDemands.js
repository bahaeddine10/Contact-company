const express = require('express');
const route = express.Router();
const demandModel = require('../models/demand.model');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const nodemailer = require('nodemailer');

const privatekey = "#hellofromjjjj#";

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

// Test route to check database connection
route.get('/', (req, res) => {
    demandModel.testConnection()
        .then((msg) => res.send(msg))
        .catch((err) => res.status(500).send(err)); // Ensure proper error status
});

// Multer storage setup for in-memory file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route for uploading demands along with a CV file
route.post('/uploaddemand', upload.single('cv'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded. Please upload a CV.' });
    }

    const demandData = {
        jobTitle: req.body.jobTitle,
        jobDesc: req.body.jobDesc,
        reqSkills: req.body.reqSkills,
        experience: parseInt(req.body.experience, 10),
        education: req.body.education,
        salary: parseFloat(req.body.salary),
        email: req.body.email,
        file: {
            filename: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
        },
    };

    demandModel.saveDemand(demandData)
        .then((savedDemand) => {
            res.status(200).json({ message: 'Demand and file uploaded successfully', data: savedDemand });
        })
        .catch((error) => {
            console.error('Error saving demand:', error);
            res.status(500).json({ message: 'Error uploading file and saving demand', error });
        });
});

// Route for fetching all demands that are not accepted
route.get('/alldemandsnotaccepted', verifyToken, (req, res) => {
    demandModel.selectAllNotAccepted()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).send(err)); // Ensure proper error status
});

// Route for fetching all demands that are not accepted
route.get('/alldemandsaccepted',verifyToken, (req, res) => {
    demandModel.selectAllAccepted()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).send(err)); // Ensure proper error status
});

// Route for updating a demand by ID
route.put('/updatedemand/:id', verifyToken, (req, res) => {
    demandModel.accepteone(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send(err)); // Ensure proper error status
});

// Route for deleting a demand by ID
route.delete('/deletedemand/:id', verifyToken, (req, res) => {
    demandModel.deleteone(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).send(err)); // Ensure proper error status
});

module.exports = route;