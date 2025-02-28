const express = require('express');
const router = express.Router();
const Survey = require('../models/survey');

// ✅ Submit a survey
router.post('/surveys', async (req, res) => {
    try {
        const newSurvey = new Survey(req.body);
        await newSurvey.save();
        res.status(201).json(newSurvey);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
   
});

// ✅ Get all submitted surveys
router.get('/surveys', async (req, res) => {
   
    try {
        const surveys = await Survey.find();
        res.json(surveys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get a survey by ID
router.get('/surveys/:id', async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id);
        if (!survey) return res.status(404).json({ error: 'Survey not found' });
        res.json(survey);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete a survey by ID
router.delete('/surveys/:id', async (req, res) => {
    try {
        const deletedSurvey = await Survey.findByIdAndDelete(req.params.id);
        if (!deletedSurvey) return res.status(404).json({ error: 'Survey not found' });
        res.json({ message: 'Survey deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
