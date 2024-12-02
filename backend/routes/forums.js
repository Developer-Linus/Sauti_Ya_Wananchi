const express = require('express');
const router = express.Router();
const Forum = require('../models/Forum');

// Get all forums
router.get('/', async (req, res) => {
  try {
    const forums = await Forum.find();
    res.json(forums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new forum
router.post('/', async (req, res) => {
  const forum = new Forum({
    title: req.body.title,
    description: req.body.description,
    posts: req.body.posts,
  });

  try {
    const newForum = await forum.save();
    res.status(201).json(newForum);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;