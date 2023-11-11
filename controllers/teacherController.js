// teacherController.js

const teacherService = require('../services/teacherService');

const teacherController = {
  getAllTeachers: async (req, res) => {
    try {
      const teachers = await teacherService.findAll();
      res.json(teachers);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getTeacherById: async (req, res) => {
    try {
      const teacher = await teacherService.findById(req.params.id);
      if (!teacher) {
        return res.status(404).send('Teacher not found');
      }
      res.json(teacher);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createTeacher: async (req, res) => {
    try {
      const newTeacher = await teacherService.create(req.body);
      res.status(201).json(newTeacher);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateTeacher: async (req, res) => {
    try {
      const updatedTeacher = await teacherService.update(req.params.id, req.body);
      if (!updatedTeacher) {
        return res.status(404).send('Teacher not found');
      }
      res.json(updatedTeacher);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteTeacher: async (req, res) => {
    try {
      const teacher = await teacherService.delete(req.params.id);
      if (!teacher) {
        return res.status(404).send('Teacher not found');
      }
      res.status(200).send('Teacher deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = teacherController;
