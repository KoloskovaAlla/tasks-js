// const readline = require('readline');
import readline from 'readline';

const jeweleryInStones = (jewels, stones) => {
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones.charAt(i))) {
      ++result;
    }
  }
  return result;
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
reader.on('line', (line) => {
  inputLines.push(line);
});

reader.on('close', () => {
  const [jewels, stones] = inputLines.map((line) => line.trim());
  console.log(jeweleryInStones(jewels, stones));
});
