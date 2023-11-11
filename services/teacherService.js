// teacherService.js

const Teacher = require('../models/Teacher');

const teacherService = {
  findAll: async () => await Teacher.find(),
  findById: async (id) => await Teacher.findById(id),
  create: async (data) => await Teacher.create(data),
  update: async (id, data) => await Teacher.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Teacher.findByIdAndDelete(id),
};

module.exports = teacherService;
