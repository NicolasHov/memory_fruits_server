const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    value: { type: Number, required: true },
    // TODO: name: { type: String, required: true },
    // TODO: timeScore: { type: Date, required: true },
});

module.exports = mongoose.model('Score', scoreSchema);