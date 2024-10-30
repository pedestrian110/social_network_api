const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a new post in a circle
router.post('/create', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all posts in a circle
router.get('/circle/:circleId', async (req, res) => {
  try {
    const posts = await Post.find({ circleId: req.params.circleId });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
