const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    nationality: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    countryCode: { 
        type: String, 
        required: true, 
        enum: ["+91", "+1", "+44", "+61", "+81", "+49", "+33", "+39", "+86", "+7", "+34", "+55", "+27", "+82", "+964", "+971", "+92", "+20", "+60", "+66"] 
    }, 
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
