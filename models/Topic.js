const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema({
  id: String,
  title: String,
  description: String, 
  type: String,
  period: String,
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }]
});

topicSchema.pre('save', function(next) {
  if (!this.id) {
    this.id = this._id;
  }
  next();
}
);

module.exports = mongoose.model('Topic', topicSchema);
