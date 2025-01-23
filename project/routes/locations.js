const express = require('express');
const Location = require('../models/location');
const authenticateToken = require('../middleware/auth');
const router = express.Router();


router.get('/', authenticateToken, async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: 'Błąd pobierania lokalizacji' });
  }
});

module.exports = router;
