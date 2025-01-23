require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const locationRoutes = require('./routes/locations');

const app = express();


app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Połączono z MongoDB'))
  .catch((err) => console.error('Błąd połączenia z MongoDB:', err));


app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes); 
app.use('/api/locations', locationRoutes); 


app.use((req, res) => {
  res.status(404).json({ error: 'Nie znaleziono zasobu' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
