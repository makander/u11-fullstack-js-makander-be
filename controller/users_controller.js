//const Users = require('../models/user');

module.exports = {
  index(req, res) {
    res.send({ greeting: 'suuup!' });
  },

  create(req, res) {
    res.send({ User: 'Theres gonna be a user here, yeah, thats right' });
  },

  delete(req, res) {
    res.send({ User: 'yeah, we delete yo ass' });
  },

  login(req, res) {
    res.send({ User: 'You logged in' });
  },

  edit(req, res) {},

  dashboard(req, res) {},

  admin(req, res) {},
};
