// projectController.js

const projectService = require('../services/projectService');

const projectController = {
  getAllProjects: async (req, res) => {
    try {
      const projects = await projectService.findAll();
      res.json(projects);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getProjectById: async (req, res) => {
    try {
      const project = await projectService.findById(req.params.id);
      if (!project) {
        return res.status(404).send('Project not found');
      }
      res.json(project);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createProject: async (req, res) => {
    try {
      const newProject = await projectService.create(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateProject: async (req, res) => {
    try {
      const updatedProject = await projectService.update(req.params.id, req.body);
      if (!updatedProject) {
        return res.status(404).send('Project not found');
      }
      res.json(updatedProject);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteProject: async (req, res) => {
    try {
      const project = await projectService.delete(req.params.id);
      if (!project) {
        return res.status(404).send('Project not found');
      }
      res.status(200).send('Project deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = projectController;
