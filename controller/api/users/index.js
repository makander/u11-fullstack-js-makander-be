const express = require('express');
let router = express.Router();
const userService = require('../../../services/users');

router.post('/login', function(req, res) {
  userService.login(req, res);
});

router.post('/register', (req, res) => {
  userService.register(req, res);
});

module.exports = router;
