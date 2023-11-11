// projectService.js

const Project = require('../models/Project');

const projectService = {
  findAll: async () => await Project.find().populate('funders'),
  findById: async (id) => await Project.findById(id).populate('funders'),
  create: async (data) => await Project.create(data),
  update: async (id, data) => await Project.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Project.findByIdAndDelete(id),
};

module.exports = projectService;
