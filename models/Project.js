const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  id: String,
  title: String,
  field: String,
  description: String,
  funders: [{
    type: Schema.Types.ObjectId,
    ref: 'Funder'
  }]
});


projectSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = this._id;
  }
  next();
});
module.exports = mongoose.model('Project', projectSchema);
