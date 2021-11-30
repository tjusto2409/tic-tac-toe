const boardBuilder = require('../domains/board'),
winOrBlockStrategy = require('../strategies/winOrBlockStrategy'),
forkStrategy = require('../strategies/forkStrategy'),
randomStrategy = require('../strategies/randomStrategy');

class StrategistService {
    _strategies = Array.of(winOrBlockStrategy, forkStrategy, randomStrategy);

    getBetterStrategy(board) {
        board = boardBuilder(board);

        let flagStrategy = true;
        let index = 0;
        let newBoard = [];

        while(flagStrategy) {
            console.log(this._strategies[index])
            newBoard = this._strategies[index].execute(board);
            
            flagStrategy = !board.wasChanged(newBoard); 
            index++;
        }

        return board.toString(newBoard);
    }
}

module.exports = new StrategistService();