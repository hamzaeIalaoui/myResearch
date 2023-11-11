// appliesController.js

const appliesService = require('../services/appliesService');

const appliesController = {
  getAllApplications: async (req, res) => {
    try {
      const applications = await appliesService.findAll();
      res.json(applications);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getApplicationById: async (req, res) => {
    try {
      const application = await appliesService.findById(req.params.id);
      if (!application) {
        return res.status(404).send('Application not found');
      }
      res.json(application);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createApplication: async (req, res) => {
    try {
      const newApplication = await appliesService.create(req.body);
      res.status(201).json(newApplication);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateApplication: async (req, res) => {
    try {
      const updatedApplication = await appliesService.update(req.params.id, req.body);
      if (!updatedApplication) {
        return res.status(404).send('Application not found');
      }
      res.json(updatedApplication);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteApplication: async (req, res) => {
    try {
      const application = await appliesService.delete(req.params.id);
      if (!application) {
        return res.status(404).send('Application not found');
      }
      res.status(200).send('Application deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = appliesController;
