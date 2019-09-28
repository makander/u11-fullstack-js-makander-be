const cors = require('cors');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://CoffeeUser:tjzuhdVsAkD5E59ywBaK@cluster0-mbz2k.mongodb.net/test?retryWrites=true&w=majority',

  //'mongodb://localhost/u11',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

var allowedOrigins = [
  'http://someorigin.com',
  'http://anotherorigin.com',
  'http://localhost:3000',
];

app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },

    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', routes);

module.exports = app;
