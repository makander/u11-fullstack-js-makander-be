const express = require('express');
let router = express.Router();
const coffeePotService = require('../../../services/coffeePots');
const auth = require('../../../middleware/auth');

router.put('/edit/:id', auth, (req, res) => {
  coffeePotService.edit(req, res);
});

router.get('/', coffeePotService.getCoffeePots);

router.get('/:id', auth, coffeePotService.getOneCoffeePot);

router.delete('/delete/:id', auth, (req, res) => {
  coffeePotService.deletePot(req, res);
});

module.exports = router;
