const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    condition: { type: String },
});

module.exports = mongoose.model('Patient', PatientSchema);

