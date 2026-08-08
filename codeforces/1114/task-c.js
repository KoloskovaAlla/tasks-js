const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let idx = 0;

const t = Number(input[idx++]);
const results = [];

const solve = (n, a, b) => {
  const countOccurrences = (str, substr) => str.split(substr).length - 1;

  console.log(countOccurrences('100', '1')); // 1

};

for (let tc = 0; tc < t; tc++) {
  const n = Number(input[idx++]);
  const a = input[idx++].trim();
  const b = input[idx++].trim();

  // тут решаешь задачу
  const res = solve(n, a, b);
  results.push(res);
}

console.log(results.join('\n'));