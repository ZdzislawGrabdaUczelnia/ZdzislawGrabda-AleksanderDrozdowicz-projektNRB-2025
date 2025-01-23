const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();


router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Błąd podczas rejestracji' });
  }
});


router.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  const mockPassword = 'password123';
  if (username === 'admin' && password === mockPassword) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
  }
});

module.exports = router;