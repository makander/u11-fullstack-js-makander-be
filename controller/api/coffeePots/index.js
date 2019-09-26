const express = require('express');
let router = express.Router();
const coffeePotService = require('../../../services/coffeePots');

router.post('/create', (req, res) => {
  coffeePotService.create(req, res);
});

router.put('/edit/:id', (req, res) => {
  coffeePotService.edit(req, res);
});

router.get('/', coffeePotService.get);

router.get('/:id', coffeePotService.getOne);

router.get('/test', coffeePotService.test);

router.delete('/delete/:id', (req, res) => {
  coffeePotService.delete(req, res);
});

module.exports = router;
