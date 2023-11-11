const mongoose = require('mongoose');
const { Schema } = mongoose;

const linkSchema = new Schema({
  title: String,
  url: String
});

const profileSchema = new Schema({
  picture: String,
  aboutMe: String,
  skills: [String],
  activities: [String],
  links: [linkSchema] 
});


profileSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = this._id;
  }
  next();
});

module.exports = mongoose.model('Profile', profileSchema);
