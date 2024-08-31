const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// POST route to handle form submissions
router.post('/', async (req, res) => {
  try {
    const newSubmission = new Submission(req.body);
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

module.exports = router;