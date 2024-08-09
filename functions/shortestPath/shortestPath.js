// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let numVertices = 0;
let start = 0;
let end = 0;

rl.on('line', (line) => {
  inputLines.push(line.trim())
});

rl.on('close', () => {
  numVertices = parseInt(inputLines[0], 10);

  // Преобразуем строки с матрицей смежности в массив чисел
  const adjacencyMatrix = inputLines.slice(1, numVertices + 1).map(line => line.split(' ').map(Number));

  // Преобразуем последнюю строку для получения начальной и конечной вершин
  [start, end] = inputLines[numVertices + 1].split(' ').map(Number);

    // Вызываем функцию для нахождения кратчайшего пути и выводим результат
  console.log(shortestPathLength(numVertices, adjacencyMatrix, start, end));
  
});

const shortestPathLength = (numVertices, adjacencyMatrix, start, end) => {
  
};
