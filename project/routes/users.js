const express = require('express');
const User = require('../models/user'); 
const authenticateToken = require('../middleware/auth'); 
const router = express.Router();



router.get('/', authenticateToken, async (req, res) => {
  try {
    const populate = req.query.populate === 'true';  

    let query = User.find();

    if (populate) {
      query = query.populate('reviews.locationId');  
    }

    const users = await query;
    
    
    console.log('Users fetched:', users); 

    res.json(users);  
  } catch (err) {
    console.error('Error fetching users:', err);  
    res.status(500).json({ error: 'Błąd pobierania użytkowników' });
  }
});



router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ user_id: req.params.id });

    if (!user) {
      return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    }

    
    console.log('User found:', user);  

    res.json(user);  
  } catch (err) {
    console.error('Error fetching user by ID:', err);  
    res.status(500).json({ error: 'Błąd pobierania użytkownika' });
  }
});

module.exports = router;
