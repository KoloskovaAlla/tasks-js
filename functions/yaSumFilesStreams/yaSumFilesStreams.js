// const readline = require('readline');
import readline from 'readline';

const sum = (a, b) => {
  return a + b;
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];

reader.on('line', (line) => {
  arr = line.trim().split(' ');
  let result = sum(parseInt(arr[0]), parseInt(arr[1]));
  console.log(result);
});

reader.on('close', () => { });