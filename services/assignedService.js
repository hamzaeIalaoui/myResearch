// assignedService.js

const Assigned = require('../models/Assigned');

const assignedService = {
  findAll: async () => await Assigned.find().populate('topic').populate('student'),
  findById: async (id) => await Assigned.findById(id).populate('topic').populate('student'),
  create: async (data) => await Assigned.create(data),
  update: async (id, data) => await Assigned.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Assigned.findByIdAndDelete(id),
};

module.exports = assignedService;
