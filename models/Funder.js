const mongoose = require('mongoose');
const { Schema } = mongoose;

const funderSchema = new Schema({
  name: String,
  email: String,
  phone: String
});

funderSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = this._id;
  }
  next();
});

module.exports = mongoose.model('Funder', funderSchema);
