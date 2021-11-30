const express = require('express'),
app = express(),
boardRouter = require('./src/router/boardRouter');
require('dotenv/config');

app.use(boardRouter);
app.listen(process.env.PORT)