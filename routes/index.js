const express = require('express'),
  router = express.Router();

const coffeeController = require('../controller/api/coffeePots');
const usersController = require('../controller/api/users');
const homeController = require('../controller/home');

router.use('/api/coffeepots', coffeeController);
router.use('/api/users', usersController);
router.use('/', homeController.index);

module.exports = router;
