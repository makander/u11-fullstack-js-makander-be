const User = require('../../models/user');

const register = (req, res) => {
  const userProps = req.body;
  console.log(userProps);

  User.create(userProps).then((User) => res.send(User));
};

/*   delete = (req, res) => {
    res.send({ User: 'yeah, we delete yo ass' });
  } */

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email && !password) {
    return res.status(404).send('username or password missing');
  }

  if (req.body === null || req.body === undefined) {
    return res.status(404).send('username or password missing');
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(404).send(err);
    }
    User.isPasswordValid(password)
      .then((match) => {
        if (match) {
          const payload = { user: user.email };
          const options = {
            expiresIn: '2d',
            issuer: 'CoffeePot enterprises',
          };
          const secret = 'cofvefe';
          const token = jwt.sign(payload, secret, options);

          res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 });
          res.end();

          res.status(200).send(token);
        } else {
          res.status(401).send('auth error');
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
};

logout = (req, res) => {
  res.send({ User: 'You logged out' });
};

//edit(req, res) {}

dashboard = (req, res) => {
  console.log(req.cookies.coffeePot);
  //console.log(req);
  //console.log(req.body);
  const payload = req.decoded;
  //console.log(payload);

  res.send('Welcome young paddawan');
};

//admin(req, res) {}

module.exports = {
  register: register,
  login: login,
};
