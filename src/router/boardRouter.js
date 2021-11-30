const express = require('express'),
boardRouter = express.Router(),
validator = require('../helpers/validator'),
boardController = require('../controller/boardController');

boardRouter
.use((req, res, next) => {
    try {
        validator(req);
        next();
    }
    catch(err) {
        res.status(400).json({ msgError: err.message});
    }
})
.get('/api', (req, res) => boardController.get(req, res));

module.exports = boardRouter;