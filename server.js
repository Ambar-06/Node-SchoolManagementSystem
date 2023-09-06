
const http = require('http');
const express = require('express');
const morgan = require('morgan');    // This is to get the activity on terminal

const app = express();
const PORT= process.env.PORT || 8000;

// console.log(app);

// =======MIDDLEWARE=========

app.use(morgan("dev"));

app.listen(PORT, console.log(`Server listening to port ${PORT}`));