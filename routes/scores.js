const express = require('express');
const router = express.Router();

const Score = require('../models/score');

router.post('/', (req, res, next) => {
  console.log(req.body);
  const score = new Score({
    ...req.body
  });

  score.save()
    .then(() => res.status(201).json({ score }))
    .catch(error => res.status(400).json({ error }));
});

router.get('/', (req, res, next) => {
  Score.find()
    .then(scores => {
      console.log(scores);
      res.status(200).json(scores)
    })
    .catch(error => res.status(400).json({ error }));
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Score.deleteOne({ _id: id }).then(
    () => {
      res.status(200).json({ message: 'Deleted!' });
    }
  ).catch(
    (error) => {
      res.status(400).json({ error: error });
    }
  );
});


module.exports = router;