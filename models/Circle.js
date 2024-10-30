const mongoose = require('mongoose');

const circleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Parent' }],
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: false },
  sectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: false },
  communityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Community', required: false }
});

module.exports = mongoose.model('Circle', circleSchema);
