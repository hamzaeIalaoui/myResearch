// funderController.js

const funderService = require('../services/funderService');

const funderController = {
  getAllFunders: async (req, res) => {
    try {
      const funders = await funderService.findAll();
      res.json(funders);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getFunderById: async (req, res) => {
    try {
      const funder = await funderService.findById(req.params.id);
      if (!funder) {
        return res.status(404).send('Funder not found');
      }
      res.json(funder);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createFunder: async (req, res) => {
    try {
      const newFunder = await funderService.create(req.body);
      res.status(201).json(newFunder);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateFunder: async (req, res) => {
    try {
      const updatedFunder = await funderService.update(req.params.id, req.body);
      if (!updatedFunder) {
        return res.status(404).send('Funder not found');
      }
      res.json(updatedFunder);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteFunder: async (req, res) => {
    try {
      const funder = await funderService.delete(req.params.id);
      if (!funder) {
        return res.status(404).send('Funder not found');
      }
      res.status(200).send('Funder deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = funderController;
