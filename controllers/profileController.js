// profileController.js

const profileService = require('../services/profileService');

const profileController = {
  getAllProfiles: async (req, res) => {
    try {
      const profiles = await profileService.findAll();
      res.json(profiles);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getProfileById: async (req, res) => {
    try {
      const profile = await profileService.findById(req.params.id);
      if (!profile) {
        return res.status(404).send('Profile not found');
      }
      res.json(profile);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createProfile: async (req, res) => {
    try {
      const newProfile = await profileService.create(req.body);
      res.status(201).json(newProfile);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateProfile: async (req, res) => {
    try {
      const updatedProfile = await profileService.update(req.params.id, req.body);
      if (!updatedProfile) {
        return res.status(404).send('Profile not found');
      }
      res.json(updatedProfile);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteProfile: async (req, res) => {
    try {
      const profile = await profileService.delete(req.params.id);
      if (!profile) {
        return res.status(404).send('Profile not found');
      }
      res.status(200).send('Profile deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = profileController;
