const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
  index(req, res) {
    res.send({ greeting: 'suuup!' });
  },

  register(req, res) {
    const userProps = req.body;
    console.log(userProps);

    User.create(userProps).then((User) => res.send(User));
  },

  delete(req, res) {
    res.send({ User: 'yeah, we delete yo ass' });
  },

  login(req, res) {
    jwt.sign();
  },

  logout(req, res) {
    res.send({ User: 'You logged out' });
  },

  edit(req, res) {},

  dashboard(req, res) {},

  admin(req, res) {},
};
