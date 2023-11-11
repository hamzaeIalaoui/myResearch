// appliesService.js

const Applies = require('../models/Applies');

const appliesService = {
  findAll: async () => await Applies.find().populate('student').populate('topic'),
  findById: async (id) => await Applies.findById(id).populate('student').populate('topic'),
  create: async (data) => await Applies.create(data),
  update: async (id, data) => await Applies.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Applies.findByIdAndDelete(id),
};

module.exports = appliesService;
