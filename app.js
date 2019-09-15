const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// dotenv -> get it. Read it. Booyahkashakaya

mongoose.connect('mongodb://localhost/u11', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

module.exports = app;
