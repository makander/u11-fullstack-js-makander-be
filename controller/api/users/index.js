const express = require('express');
let router = express.Router();
const userService = require('../../../services/users');
const auth = require('../../../middleware/auth');

router.post('/login', function(req, res) {
  userService.login(req, res);
});

router.post('/register', (req, res) => {
  userService.register(req, res);
});

router.put('/edit/:id', auth, (req, res) => {
  userService.edit(req, res);
});

router.delete('/delete/:id', auth, (req, res) => {
  userService.deleteUser(req, res);
});

router.get('/:id', auth, userService.getOne);

router.get('/', auth, userService.getMany);

module.exports = router;
