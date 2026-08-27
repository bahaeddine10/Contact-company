const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    employees: {
        type: [String], // Array of employee emails
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: "not finished yet",
    }
});

const Project = mongoose.model('Project', projectSchema);

// Function to create a new project
const createProject = async (projectData) => {
    try {
        const newProject = new Project(projectData);
        await newProject.save();
        return newProject;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Function to get all projects
const getAllProjects = async () => {
    try {
        const projects = await Project.find();
        return projects;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    Project,
    createProject,
    getAllProjects
};

