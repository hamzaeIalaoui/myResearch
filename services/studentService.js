

const Student = require('../models/Student');

const studentService = {
  findAll: async () => {
    return await Student.find();
  },
  findById: async (id) => {
    return await Student.findById(id);
  },
  create: async (studentData) => {
    return await Student.create(studentData);
  },
  update: async (id, updateData) => {
    return await Student.findByIdAndUpdate(id, updateData, { new: true });
  },
  delete: async (id) => {
    return await Student.findByIdAndDelete(id);
  },
};

module.exports = studentService;
