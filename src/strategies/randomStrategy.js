class RandomStrategy {
    execute(board) {
        let matrixCopy = board.matrixCopy;

        if(matrixCopy[4].has('empty')) {
            matrixCopy[4] = new Map().set('o', 5);
            return matrixCopy;
        }

        for(let index of Array.of(0, 2, 6, 8)) {
            if(matrixCopy[index].has('empty')) {
                matrixCopy[index] = new Map().set('o', index+1);
                return matrixCopy;
            }
        }

        index = matrixCopy.findIndex(v => v.has('empty'));
        matrixCopy[index] = new Map().set('o', index+1);
        return matrixCopy;
    }
}

module.exports = new RandomStrategy();