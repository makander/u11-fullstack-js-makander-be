const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.coffeeToken;
  if (!token) {
    return res.status(401);
  }
  try {
    secret = 'cofvefe';
    let payload = jwt.verify(token, secret);
    next();
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }
};
