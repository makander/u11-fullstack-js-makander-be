require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}${process.env.MONGO_CONN_URL}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .catch((error) => console.log(error));

//const allowedOrigins = ['https://coffeepot-fe.herokuapp.com/'];
const allowedOrigins = ['http://localhost:3000'];
app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let msg =
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
