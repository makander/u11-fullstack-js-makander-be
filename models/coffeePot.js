const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeePotSchema = new Schema({
  name: String,
  description: String,
  ip: String,
  status: Array,
});

const CoffeePot = mongoose.model('coffeepot', CoffeePotSchema, 'coffee_pot', {
  versionKey: false,
});

module.exports = CoffeePot;
