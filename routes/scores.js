const express = require('express');
const router = express.Router();

const Score = require('../models/score');

router.post('/', (req, res, next) => {
    const score = new Score({
        ...req.body
    });

    score.save()
        .then(() => res.status(201).json({ score }))
        .catch(error => res.status(400).json({ error }));
});

router.get('/', (req, res, next) => {
    Score.find()
        .then(scores => res.status(200).json({ scores }))
        .catch(error => res.status(400).json({ error }));
});

module.exports = router;