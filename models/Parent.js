const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  sectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
  communityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
  circles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Circle' }]
});

module.exports = mongoose.model('Parent', parentSchema);
