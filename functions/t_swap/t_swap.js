const readline = require('readline');

const swap = (matrix, x1, y1, x2, y2) => {
    const temp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = temp;
}

const rotateMatrix = (matrix, direction) => {
    const n = matrix.length;
    const k = Math.floor(n / 2);

    const rotateCircle = (matrix, offset) => {
        for (let i = offset; i < n - 1 - offset; i++) {
            const temp = matrix[offset][i];
            if (direction === 'R') {
                swap(matrix, offset, i, n - 1 - i, offset);
                swap(matrix, n - 1 - i, offset, n - 1 - offset, n - 1 - i);
                swap(matrix, n - 1 - offset, n - 1 - i, i, n - 1 - offset);
                matrix[offset][i] = matrix[n - 1 - i][offset];
                matrix[n - 1 - i][offset] = matrix[n - 1 - offset][n - 1 - i];
                matrix[n - 1 - offset][n - 1 - i] = matrix[i][n - 1 - offset];
                matrix[i][n - 1 - offset] = temp;
            } else if (direction === 'L') {
                swap(matrix, offset, i, i, n - 1 - offset);
                swap(matrix, offset, i, n - 1 - offset, n - 1 - i);
                swap(matrix, offset, i, n - 1 - i, offset);
            }
        }
    }

    for (let offset = 0; offset < k; offset++) {
        rotateCircle(matrix, offset);
    }
}

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let n, direction;
let matrix = [];

reader.on('line', (line) => {
    inputLines.push(line);

    if (inputLines.length === 1) {
        [n, direction] = line.trim().split(' ');
    } else if (inputLines.length > 1 && inputLines.length <= parseInt(n) + 1) {
        matrix.push(line.split(' ').map(Number));
    }

    if (inputLines.length === parseInt(n) + 1) {
        rotateMatrix(matrix, direction);
        const k = parseInt(n); // Количество операций равно размеру матрицы

        console.log(k);
        for (let i = 0; i < k; i++) {
            const x1 = Math.floor(i / 2);
            const y1 = i % 2 === 0 ? Math.floor(i / 2) : Math.floor(parseInt(n) / 2);
            const x2 = y1;
            const y2 = parseInt(n) - 1 - x1;
            console.log(`${x1} ${y1} ${x2} ${y2}`);
        }

        process.exit();
    }
});