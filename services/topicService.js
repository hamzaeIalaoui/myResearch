// topicService.js

const Topic = require('../models/Topic');

const topicService = {
  findAll: async () => await Topic.find().populate('projects'),
  findById: async (id) => await Topic.findById(id).populate('projects'),
  create: async (data) => await Topic.create(data),
  update: async (id, data) => await Topic.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Topic.findByIdAndDelete(id),
};

module.exports = topicService;
