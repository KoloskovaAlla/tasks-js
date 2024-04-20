const readline = require('readline');

const rotateMatrix = (matrix) => {
    const n = matrix.length;
    const m = matrix[0].length;
    
    // Транспонирование матрицы
    const transposedMatrix = [];
    for (let i = 0; i < m; i++) {
        transposedMatrix.push([]);
        for (let j = 0; j < n; j++) {
            transposedMatrix[i].push(matrix[j][i]);
        }
    }
    
    // Инвертирование порядка элементов в каждой строке
    const rotatedMatrix = [];
    for (let i = 0; i < m; i++) {
        rotatedMatrix.push(transposedMatrix[i].reverse());
    }
    
    return rotatedMatrix;
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let n, m;
let matrix = [];

reader.on('line', (line) => {
    inputLines.push(line);

    if (inputLines.length === 1) {
        [n, m] = line.split(' ').map(Number);
    } else if (inputLines.length > 1 && inputLines.length <= n + 1) {
        matrix.push(line.split(' ').map(Number));
    }

    if (inputLines.length === n + 1) {
        const rotatedMatrix = rotateMatrix(matrix);
        rotatedMatrix.forEach(row => console.log(row.join(' ')));
        reader.close();
    }
});
