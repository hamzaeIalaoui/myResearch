const mongoose = require('mongoose');
const { Schema } = mongoose;

const appliesSchema = new Schema({
  resume: String,
  proposal: String,
  date: Date,
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topic'
  }
});


appliesSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = this._id;
  }
  next();
}
);

module.exports = mongoose.model('Applies', appliesSchema);
