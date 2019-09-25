const CoffeePot = require('../../models/coffeePot');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
  const coffeePotProps = req.body;
  try {
    await CoffeePot.create(coffeePotProps);
    res.status(200).send('coffeePot created');
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

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
