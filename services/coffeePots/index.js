const CoffeePot = require('../../models/coffeePot');

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
    result = await CoffeePot.findByIdAndUpdate(Id, coffeePotProps);

    res.status(200).send({ updated: result });
  } catch (e) {
    console.log(e);
  }
};

const getCoffeePots = async (req, res) => {
  try {
    const result = await CoffeePot.find({}).select({ status: { $slice: -1 } });

    res.send({ result });
  } catch (e) {
    console.log(e);
  }
};

const getOneCoffeePot = async (req, res) => {
  try {
    const coffeePotProps = req.body;

    const result = await CoffeePot.findOne(coffeePotProps);

    res.send({ result });
  } catch (e) {
    console.log(e);
  }
};

const deletePot = async (req, res) => {
  try {
    const props = req.body;
    console.log(Id, props);
    await CoffeePot.findByIdAndDelete(Id);
    res.status(200).send('deleted');
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  edit,
  getCoffeePots,
  getOneCoffeePot,
  deletePot,
};
