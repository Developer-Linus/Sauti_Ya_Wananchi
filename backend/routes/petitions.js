const express = require('express');
const router = express.Router();
const Petition = require('../models/Petition');

// Get all petitions
router.get('/', async (req, res) => {
  try {
    const petitions = await Petition.find();
    res.json(petitions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new petition
router.post('/', async (req, res) => {
  const petition = new Petition({
    title: req.body.title,
    description: req.body.description,
    signatures: req.body.signatures,
  });

  try {
    const newPetition = await petition.save();
    res.status(201).json(newPetition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;