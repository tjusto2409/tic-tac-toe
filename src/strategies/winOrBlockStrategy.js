class WinOrBlockStrategy {
    execute(board) {
        let matrixCopy = this._change(board.matrixCopy);

        if(!board.wasChanged(matrixCopy)) {
            let matrixVertical = [
                matrixCopy[0], matrixCopy[3], matrixCopy[6],
                matrixCopy[1], matrixCopy[4], matrixCopy[7],
                matrixCopy[2], matrixCopy[5], matrixCopy[8]
            ];

            matrixCopy = this._change(matrixVertical);

            if(board.compareMatrix(matrixCopy, matrixVertical)) {
                return [
                    matrixCopy[0], matrixCopy[3], matrixCopy[6],
                    matrixCopy[1], matrixCopy[4], matrixCopy[7],
                    matrixCopy[2], matrixCopy[5], matrixCopy[8]
                ];
            }
    
            matrixCopy = this._verifyDiagonal(board.matrixCopy, true, 0, 4, 8);
        }        

        return matrixCopy;
    }

    _change(matrix) {
        let row = [];

        for(let interval of Array.of(0,3,6)) {
            row = matrix.slice(interval, interval+3);

            if(row.filter(v => v.has('empty')).length == 1) {
                let index = row.findIndex(v => v.has('empty'));
                row[index] = new Map().set('o', interval + index + 1);
                matrix.splice(interval + index, 1, row[index]);
                break;
            }
        }

        return matrix;
    }

    _verifyDiagonal(matrix, flag, ...indexDiagonal) {
        const sumDiagonal = 15;
        const diagonal = Array.of(matrix[indexDiagonal[0]], matrix[indexDiagonal[1]], matrix[indexDiagonal[2]]);

        if(diagonal.filter(v => v.has('empty')).length == 1) {
            let position = sumDiagonal - diagonal.map(move => move.values().next().value)
                                           .reduce((prev, curr) => prev + curr);

            matrix[position-1] = new Map().set('o', position);
            flag = false;
        }

        if(flag) 
            this._verifyDiagonal(matrix, false, 2, 4, 6);

        return matrix;
    }
}

module.exports = new WinOrBlockStrategy();