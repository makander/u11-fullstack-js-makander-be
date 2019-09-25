const CoffeePot = require('../../models/coffeePot');
const jwt = require('jsonwebtoken');

const create = (req, res) => {};

const edit = (req, res) => {};

const read = (req, res) => {
  res.send({ message: 'Woop, coffeePots' });
};

const deletePot = (req, res) => {};

module.exports = {
  create: create,
  edit: edit,
  read: read,
  delete: deletePot,
};
