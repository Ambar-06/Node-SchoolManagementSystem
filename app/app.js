const express = require('express');
const morgan = require('morgan');    // This is to get the activity on terminal

const app = express();

// =======MIDDLEWARE=========
app.use(morgan("dev"));

module.exports = app