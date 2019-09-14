const express = require('express');
const routes = require('./routes/routes');
const app = express();
const request = require('request');
const mongoose = require('mongoose');
// bodyparser?
// dotenv -> get it. Read it. Booyahkashakaya

routes(app);

module.exports = app;
