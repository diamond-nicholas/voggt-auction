const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
require('express-async-errors'); //async errors
const ApiError = require('./utils/ApiError');
const httpStatus = require('http-status');
const routes = require('./routes');

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = app;
