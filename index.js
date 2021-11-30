const express = require('express'),
app = express(),
boardRouter = require('./src/router/boardRouter');
require('dotenv/config');

console.log(process.env.PORT)
app.listen(process.env.PORT)