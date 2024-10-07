const express = require('express');
const router = express.Router();
const Poll = require('../models/Poll');

// Get all polls
router.get('/', async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new poll
router.post('/', async (req, res) => {
  const poll = new Poll({
    title: req.body.title,
    description: req.body.description,
    options: req.body.options,
  });

  try {
    const newPoll = await poll.save();
    res.status(201).json(newPoll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;