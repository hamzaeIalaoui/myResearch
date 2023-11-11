// studentController.js

const studentService = require('../services/studentService');

const studentController = {
  getAllStudents: async (req, res) => {
    try {
      const students = await studentService.findAll();
      res.json(students);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getStudentById: async (req, res) => {
    try {
      const student = await studentService.findById(req.params.id);
      if (!student) {
        return res.status(404).send('Student not found');
      }
      res.json(student);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createStudent: async (req, res) => {
    try {
      const newStudent = await studentService.create(req.body);
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateStudent: async (req, res) => {
    try {
      const updatedStudent = await studentService.update(req.params.id, req.body);
      if (!updatedStudent) {
        return res.status(404).send('Student not found');
      }
      res.json(updatedStudent);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteStudent: async (req, res) => {
    try {
      const student = await studentService.delete(req.params.id);
      if (!student) {
        return res.status(404).send('Student not found');
      }
      res.status(200).send('Student deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getAllStudentsWithProfiles: async (req, res) => {
    try {
      const studentsWithProfiles = await studentService.findAllWithProfiles();
      res.json(studentsWithProfiles);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = studentController;
