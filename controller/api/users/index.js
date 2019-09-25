const express = require('express');
let router = express.Router();
const userService = require('../../../services/users');

router.post('/login', function(req, res) {
  userService.login(req, res);
});

router.post('/register', (req, res) => {
  userService.register(req, res);
});

router.put('/update', (req, res) => {
  userService.update(req, res);
});

router.post('/delete', (req, res) => {
  userService.delete(req, res);
});

router.get('/test', userService.test);

router.get('/dashboard', userService.dashboard);

module.exports = router;
