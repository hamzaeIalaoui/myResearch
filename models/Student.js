const mongoose = require('mongoose');
const { Schema } = mongoose;

const linkSchema = new Schema({
  title: String,
  url: String
});

const assigned=new Schema({
    title:String,
    date:Date,
    status:String,
});

const studentSchema = new Schema({
  id: String,
  picture: String,
  FN_LN: String,
  email: String,
  major: String,
  minor: String,
  GPA: String,
  skill: [String], // Assuming multiple skills
  activities: [String], // Assuming multiple activities
  links: [linkSchema], // Array of link objects
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  },
  assignment:[assigned]
});

module.exports = mongoose.model('Student', studentSchema);
