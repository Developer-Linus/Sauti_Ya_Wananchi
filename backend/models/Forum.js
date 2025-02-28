const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  posts: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Forum', forumSchema);