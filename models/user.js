const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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

UserSchema.pre('save', async function(next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isPasswordValid = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  console.log(compare);
  console.log('in model', user);
  console.log(password);
  return compare;
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
