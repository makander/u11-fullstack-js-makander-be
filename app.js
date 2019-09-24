const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/api/users');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.connect(
  //'mongodb+srv://CoffeeUser:tjzuhdVsAkD5E59ywBaK@cluster0-mbz2k.mongodb.net/test?retryWrites=true&w=majority',
  'mongodb://localhost/u11',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', routes);

module.exports = app;
