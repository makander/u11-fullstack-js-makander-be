const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
