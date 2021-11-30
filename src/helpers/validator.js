class Validator {
    constructor(request) {
        if(!request.query['board']) 
            throw new Error("Query Parameter 'board' not found");

        this._board = request.query['board'];

        this._verifySize();

        if(!this._isPlayIsAllowed()) 
            throw new Error("Move not allowed");
    }

    _verifySize() {
        if(this._board.length !== 9)
            throw new Error(`Query parameter 'board' not found, ${9 - this._board.length} characters missing`)
    }

    _isPlayIsAllowed() {
        let boardX = [];
        let boardY = [];

        for(let i=0; i < this._board.length; i++) {            
            if(this._board[i] === "x") boardX.push(i+1);
    
            if(this._board[i] === "o") boardY.push(i+1);
        }
    
        let sizeX = boardX.length;
        let sizeY = boardY.length;
    
        if(sizeX === sizeY) {
            return sizeX === sizeY;
        }
        else if(sizeX > sizeY) {
            return (sizeX - sizeY) === 0 || (sizeX - sizeY) === 1
        }
        else {
            return (sizeY - sizeX) === 0
        }
    }
}

module.exports = (board) => new Validator(board);