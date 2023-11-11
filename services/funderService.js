// funderService.js

const Funder = require('../models/Funder');

const funderService = {
  findAll: async () => await Funder.find(),
  findById: async (id) => await Funder.findById(id),
  create: async (data) => await Funder.create(data),
  update: async (id, data) => await Funder.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Funder.findByIdAndDelete(id),
};

module.exports = funderService;
