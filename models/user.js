const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  isAdmin: Boolean,
  email: String,
  password: String,
});

const user = mongoose.model('user', UserSchema);

module.exports = user;
