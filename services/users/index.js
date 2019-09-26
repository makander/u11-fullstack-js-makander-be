const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const userProps = req.body;
  try {
    await User.create(userProps);
    res.status(200).send('user created');
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const deleteUser = () => {};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(404).send('username or password missing');
  }

  if (req.body === null || req.body === undefined) {
    return res.status(404).send('username or password missing');
  }

  try {
    user = await User.findOne({ email });
    validPassword = await user.isPasswordValid(password);

    if (validPassword) {
      const payload = { email: user.email, firstName: user.firstName };
      const options = {
        expiresIn: '12h',
        issuer: 'CoffeePot enterprises',
      };
      const secret = 'cofvefe';
      const token = jwt.sign(payload, secret, options);

      res.cookie('token', token, {
        maxAge: new Date(Date.now() + 43200000),
        httpOnly: true,
      });

      res.status(200).send(token);
    } else {
      res.status(401).send('auth error');
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

const logout = (req, res) => {
  res.send({ User: 'You logged out' });
};

const dashboard = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401);
  }
  secret = 'cofvefe';
  let payload = jwt.verify(token, secret);
  console.log(payload);
  res.redirect('http://192.168.1.166:5000/api/coffee');
  //res.send(`Welcome ${payload.firstName}`);
};

const test = (req, res) => {
  res.send({ message: 'Testing User Api' });
};

module.exports = {
  register: register,
  login: login,
  delete: deleteUser,
  dashboard: dashboard,
  test: test,
};
