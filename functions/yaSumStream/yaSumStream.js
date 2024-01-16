// const readline = require('readline');
import readline from 'readline';

const sum = (a, b) => {
  return a + b;
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question('', (input) => {
  const [a, b] = input.trim().split(' ').map(Number);
  const result = sum(a, b);

  console.log(result);

  reader.close();
});