const express = require('express'),
app = express(),
boardRouter = require('./src/router/boardRouter');

app.use(boardRouter);
app.listen(3000)