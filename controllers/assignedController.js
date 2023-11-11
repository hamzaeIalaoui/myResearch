// assignedController.js

const assignedService = require('../services/assignedService');

const assignedController = {
  getAllAssigned: async (req, res) => {
    try {
      const assignedList = await assignedService.findAll();
      res.json(assignedList);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getAssignedById: async (req, res) => {
    try {
      const assigned = await assignedService.findById(req.params.id);
      if (!assigned) {
        return res.status(404).send('Assigned not found');
      }
      res.json(assigned);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createAssigned: async (req, res) => {
    try {
      const newAssigned = await assignedService.create(req.body);
      res.status(201).json(newAssigned);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateAssigned: async (req, res) => {
    try {
      const updatedAssigned = await assignedService.update(req.params.id, req.body);
      if (!updatedAssigned) {
        return res.status(404).send('Assigned not found');
      }
      res.json(updatedAssigned);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteAssigned: async (req, res) => {
    try {
      const assigned = await assignedService.delete(req.params.id);
      if (!assigned) {
        return res.status(404).send('Assigned not found');
      }
      res.status(200).send('Assigned deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = assignedController;
