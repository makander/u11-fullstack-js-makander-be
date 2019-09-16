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
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(404).send('username or password missing');
    }

    User.findOne({ email }, (err, user) => {
      if (err) {
        res.status(404).send(err);
      }
      user
        .isPasswordValid(password)
        .then((match) => {
          if (match) {
            const payload = { user: user.email };
            const options = {
              expiresIn: '2d',
              issuer: 'CoffeePot enterprises',
            };
            const secret = 'cofvefe';
            const token = jwt.sign(payload, secret, options);

            res.status(200).send(token);
          } else {
            res.status(401).send('auth error');
          }
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
  },

  logout(req, res) {
    res.send({ User: 'You logged out' });
  },

  edit(req, res) {},

  dashboard(req, res) {},

  admin(req, res) {},
};
