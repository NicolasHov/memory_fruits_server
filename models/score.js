const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    value: { type: Number, required: true },
    name: { type: String, required: true },
    timeScore: { type: String, required: true },
});

module.exports = mongoose.model('Score', scoreSchema);