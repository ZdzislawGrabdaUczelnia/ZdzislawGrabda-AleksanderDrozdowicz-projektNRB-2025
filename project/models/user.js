const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  starRating: String,
  comment: String,
  createTime: String,
  updateTime: String,
});

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  reviews: [reviewSchema],
});

module.exports = mongoose.model('User', userSchema);