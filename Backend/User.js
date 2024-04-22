// In a separate file (e.g., models/User.js)

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  age: Number,
  address:String,
  city:String,
  zip:Number,
});

module.exports = mongoose.model('User', userSchema);
