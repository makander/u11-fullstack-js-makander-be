const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeePotSchema = new Schema({
  title: String,
  content: String,
  ip: String,
});

const CoffeePot = mongoose.model('coffepot', CoffeePotSchema);

module.exports = CoffeePot;
