const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  firstName: { type: String, lowercase: true },
  lastName: { type: String, lowercase: true },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    minlength: [5, 'email must be at least 5 characters.'],
    trim: true,
    required: [true, 'Your email cannot be blank.'],
  },
  password: {
    type: String,
    minlength: [4, 'password must be at least 4 characters.'],
    maxlength: [20, 'password must be less than 20 characters.'],
  },
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hashSync(this.password, 10);
  this.password = hash;
  next();
});
UserSchema.pre('findOneAndUpdate', function(next) {
  this._update.password = bcrypt.hashSync(this._update.password, 10);
  next();
});

UserSchema.methods.isPasswordValid = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
