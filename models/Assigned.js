const mongoose = require('mongoose');
const { Schema } = mongoose;

const assignedSchema = new Schema({
  title: String,
  date: Date,
  status: String,
  topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topic'
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }
});

assignedSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = this._id;
  }
  next();
}
);

module.exports = mongoose.model('Assigned', assignedSchema);
