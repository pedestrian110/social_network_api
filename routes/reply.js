const express = require('express');
const router = express.Router();
const Reply = require('../models/Reply');

// Create a reply to a post
router.post('/create', async (req, res) => {
  try {
    const reply = new Reply(req.body);
    await reply.save();
    res.status(201).json(reply);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all replies for a post
router.get('/post/:postId', async (req, res) => {
  try {
    const replies = await Reply.find({ postId: req.params.postId });
    res.json(replies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
