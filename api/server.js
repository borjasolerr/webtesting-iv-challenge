const express = require('express');

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  if (req.body.name) {
    try {
      res.status(201).json({ message: 'New resource created' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  } else {
    res.status(400).json({ message: 'Please enter name.' });
  }
});

app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      res.status(200).json({ message: 'Resource deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  } else {
    res.status(404).json({ message: 'Resource with this ID does not exist' });
  }
});

module.exports = app;
