// topicController.js

const topicService = require('../services/topicService');

const topicController = {
  getAllTopics: async (req, res) => {
    try {
      const topics = await topicService.findAll();
      res.json(topics);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getTopicById: async (req, res) => {
    try {
      const topic = await topicService.findById(req.params.id);
      if (!topic) {
        return res.status(404).send('Topic not found');
      }
      res.json(topic);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createTopic: async (req, res) => {
    try {
      const newTopic = await topicService.create(req.body);
      res.status(201).json(newTopic);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateTopic: async (req, res) => {
    try {
      const updatedTopic = await topicService.update(req.params.id, req.body);
      if (!updatedTopic) {
        return res.status(404).send('Topic not found');
      }
      res.json(updatedTopic);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteTopic: async (req, res) => {
    try {
      const topic = await topicService.delete(req.params.id);
      if (!topic) {
        return res.status(404).send('Topic not found');
      }
      res.status(200).send('Topic deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = topicController;
