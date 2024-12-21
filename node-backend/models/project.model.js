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
    status:{
        type: String,
        default: "not finished yet",
    }
});
var url='mongodb://localhost:27017/contactdb'

const Project = mongoose.model('Project', projectSchema);
// Function to create a new project
const createProject = async (projectData) => {
    try {
        await mongoose.connect(url);
        const newProject = new Project(projectData);
        await newProject.save();
        await mongoose.disconnect();
        return newProject;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Function to get all projects
const getAllProjects = async () => {
    try {
        await mongoose.connect(url);
        const projects = await Project.find();
        await mongoose.disconnect();
        return projects;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports={
    Project,
    createProject,
    getAllProjects
}
