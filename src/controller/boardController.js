const strategistService = require('../service/strategistService');

class BoardController {
    get(req, res) {
        try {
            let board = req.query['board'];

            let result = strategistService.getBetterStrategy(board);
            res.status(200).json({ result, board });
        }
        catch(err) {
            res.status(400).json(err.message);
        }
    }
}

module.exports = new BoardController();