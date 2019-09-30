const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const userProps = req.body;
  try {
    await User.create(userProps).then(res.status(200).send('user created'));
  } catch (e) {
    if (e) {
      for (field in e.errors) {
        console.log(e);
      }
    }
  }
};

const deleteUser = async (req, res) => {
  try {
    const Id = req.params.id;
    const props = req.body;
    console.log(Id, props);
    await User.findByIdAndDelete(Id);
    res.status(200).send('deleted');
  } catch (e) {
    console.log(e);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

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
      const payload = {
        email: user.email,
        firstName: user.firstName,
        isAdmin: user.isAdmin,
      };
      const options = {
        expiresIn: '12h',
        issuer: 'CoffeePot enterprises',
      };
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign(payload, secret, options);

      res.cookie('coffeeToken', token, {
        maxAge: new Date(Date.now() + 43200000),
        httpOnly: true,
      });

      res.send({
        user: {
          id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
          firstname: user.firstName,
          lastName: user.lastName,
        },
        user,
      });
    } else {
      res.status(401).send('auth error');
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

const getMany = async (req, res) => {
  try {
    const result = await User.find({});

    res.send({ result });
  } catch (e) {
    console.log(e);
  }
};

const getOne = async (req, res) => {
  try {
    const userProps = req.body;

    const result = await User.findOne(userProps);

    res.send({ result });
  } catch (e) {
    console.log(e);
  }
};

const edit = async (req, res) => {
  try {
    const Id = req.params.id;
    const userProps = req.body;
    result = await User.findOneAndUpdate(Id, userProps);
    res.status(200).send({ updated: result });
  } catch (e) {
    if (e) {
      for (field in e.errors) {
        console.log(e);
      }
    }
  }
};

module.exports = {
  register,
  login,
  deleteUser,
  edit,
  getMany,
  getOne,
};
