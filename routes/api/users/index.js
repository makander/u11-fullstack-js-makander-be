const express = require('express'),
  router = express.Router();

const userController = require('../../../controller/api/users');

router.use('/users', userController);

module.exports = router;
