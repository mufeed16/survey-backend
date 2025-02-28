const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    nationality: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
