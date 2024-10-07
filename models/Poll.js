const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  options: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, auto: true },
      text: { type: String, required: true },
      votes: { type: Number, default: 0 },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Poll', pollSchema);