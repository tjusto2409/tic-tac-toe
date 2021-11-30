class ForkStrategy {
    execute(board) {
        let matrixCopy = board.matrixCopy;
        let fork = matrixCopy.filter(v => v.has('x'));

        if(fork.length == 2) {
            let map = new Map().set(6, 1).set(8, 3).set(12, 7).set(14, 9);

            let index = fork.map(move => move.values().next().value)
                                .reduce((prev, curr) => prev + curr);

            if(map.has(index) && matrixCopy[map.get(index)-1].has('empty')) {
                matrixCopy[map.get(index)-1] = new Map().set('o', map.get(index));
            }  
        }

        return matrixCopy;
    }
}

module.exports = new ForkStrategy();