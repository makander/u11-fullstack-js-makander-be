const express = require('express');
let router = express.Router();
const coffeePotService = require('../../../services/coffeePots');

router.post('/create', (req, res) => {
  coffeePotService.create(req, res);
});

router.put('/edit', (req, res) => {
  coffeePotService.edit(req, res);
});

router.get('/', coffeePotService.read);

router.delete('/delete', (req, res) => {
  coffeePotService.delete(req, res);
});

module.exports = router;
