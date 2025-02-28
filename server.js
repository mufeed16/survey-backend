require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const surveyRoutes = require('./routes/surveyRoutes.');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Allow cross-origin requests

// Routes
app.use('/api', surveyRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
