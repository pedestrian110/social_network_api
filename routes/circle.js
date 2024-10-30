const express = require('express');
const router = express.Router();
const Circle = require('../models/Circle');

// Create a new circle
router.post('/create', async (req, res) => {
  try {
    const circle = new Circle(req.body);
    await circle.save();
    res.status(201).json(circle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all circles
router.get('/', async (req, res) => {
  try {
    const circles = await Circle.find();
    res.json(circles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
