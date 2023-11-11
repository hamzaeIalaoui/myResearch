const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
  id: String,
  FN_LN: String,
  office: String,
  email: String,
  school: String,
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }
});

module.exports = mongoose.model('Teacher', teacherSchema);
