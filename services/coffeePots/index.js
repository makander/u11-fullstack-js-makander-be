const CoffeePot = require('../../models/coffeePot');
const jwt = require('jsonwebtoken');
const axios = require('axios');

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

const edit = async (req, res) => {
  try {
    const Id = req.params.id;
    const coffeePotProps = req.body;
    await CoffeePot.findByIdAndUpdate(Id, coffeePotProps);

    res.status(200).send('updated');
  } catch (e) {
    console.log(e);
  }
};

const GetMany = async (req, res) => {
  try {
    const result = await CoffeePot.find({}).select({ status: { $slice: -1 } });
    console.log(result);
    res.send({ result });
  } catch (e) {
    console.log(e);
  }
};

const getOne = async (req, res) => {
  try {
    const coffeePotProps = req.body;
    console.log(coffeePotProps);
    const result = await CoffeePot.findOne(coffeePotProps);
    console.log(result);
    res.send({ result });
  } catch (e) {
    console.log(e);
  }
};

const test = (req, res) => {
  res.send({
    _id: 'ObjectId(5d6fee5be9e98c30880e86c5)',
    time: 'ISODate(2019-09-04T17:03:23.136Z)',
    weight: '100',
    __v: '0',
  });
};

const deletePot = async (req, res) => {
  try {
    const Id = req.params.id;
    const props = req.body;
    console.log(Id, props);
    await CoffeePot.findByIdAndDelete(Id);
    res.status(200).send('deleted');
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create: create,
  edit: edit,
  get: GetMany,
  getOne: getOne,
  delete: deletePot,
  test: test,
};
