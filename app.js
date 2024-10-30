require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Use Routes
app.use('/api/circles', require('./routes/circle'));
app.use('/api/posts', require('./routes/post'));
app.use('/api/replies', require('./routes/reply'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
