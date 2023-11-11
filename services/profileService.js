// profileService.js

const Profile = require('../models/Profile');

const profileService = {
  findAll: async () => await Profile.find(),
  findById: async (id) => await Profile.findById(id),
  create: async (data) => await Profile.create(data),
  update: async (id, data) => await Profile.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await Profile.findByIdAndDelete(id),
};

module.exports = profileService;
