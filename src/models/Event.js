const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  title:       String,
  description: String,
  date:        Date,
  location:    String,
  imageUrl:    String,
  isUpcoming:  { type: Boolean, default: true }
});
module.exports = mongoose.model('Event', EventSchema);