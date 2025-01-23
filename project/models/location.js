const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  location_id: { type: String, required: true, unique: true },
  locationName: { type: String, required: true },
  locationDetails: String,
});

module.exports = mongoose.model('Location', locationSchema);