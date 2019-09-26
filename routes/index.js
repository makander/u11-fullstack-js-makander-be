const express = require('express'),
  router = express.Router();

const coffeeController = require('../controller/api/coffeePots');
const usersController = require('../controller/api/users');

router.use('/coffeepots', coffeeController);
router.use('/users', usersController);

module.exports = router;
