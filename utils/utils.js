const jwt = require('jsonwebtoken');

module.exports = {
  validateToken: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      console.log('this is auth header', authHeader);
      const token = req.headers.authorization.split(' ')[1];
      const options = {
        expiresIn: '2d',
        issuer: 'CoffeePot enterprises',
      };

      try {
        const decodedToken = jwt.verify(token, 'cofvefe', options);
        req.decoded = decodedToken;

        next();
      } catch (err) {
        throw new Error(err);
      }
    } else {
      res.status(401).send('Auth failed');
    }
  },
};
