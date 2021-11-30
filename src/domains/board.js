class Board {
    _matrix = [];

    constructor(board) {
        this._generated(board);
    }

    get matrix() {
        return this._matrix;
    }

    get size() {
        return this._matrix.length;
    }

    get matrixCopy() {
        return Array.from(this._matrix);
    }

    _generated(board) {     
        for(let i=0;i<board.length;i++) {           
            if(board[i] !== ' ') {
                this._matrix.push(new Map().set(board[i], i+1));
                continue;
            } 

            this._matrix.push(new Map().set(board[i].replace(' ', 'empty'), null));
        }
    }

    wasChanged(newMatrix) {
        return !this._matrix.every((x, i) => newMatrix[i].has(x.keys().next().value));
    }

    compareMatrix(matrix, newMatrix) {
        return matrix.every((x, i) => newMatrix[i].has(x.keys().next().value));
    }

    toString(matrix) {
        return matrix.map(move => move.keys().next().value.replace('empty', " ")).join('');
    }
}

module.exports = (board) => new Board(board);