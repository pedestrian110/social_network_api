const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent', required: true },
  circleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Circle', required: true },
  content: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }]
});

module.exports = mongoose.model('Post', postSchema);
