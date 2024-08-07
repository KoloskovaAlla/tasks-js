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
});
