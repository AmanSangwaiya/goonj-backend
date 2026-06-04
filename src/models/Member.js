const mongoose = require('mongoose');
const MemberSchema = new mongoose.Schema({
  name:     String,
  role:     String,  // e.g., "President", "Vocalist"
  imageUrl: String,
  year:     Number,
  socials:  { instagram: String, linkedin: String }
});
module.exports = mongoose.model('Member', MemberSchema);