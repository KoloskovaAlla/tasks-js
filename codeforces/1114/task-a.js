const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let idx = 0;
const t = parseInt(input[idx++], 10);
const results = [];

const countRounds = (s) => {
  let [a, b, c] = s.split(' ').map(Number);
  let isOver = 0;
  if (a === b || a === c || b === c) return 0;
  let rounds = 0;
  while (isOver === 0) {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    if (a > b && b > c) {
      a--
      c++;
    }
    if (a > c && c > b) {
      a--;
      b++;
    }
    if (b > a && a > c) {
      b--;
      c++;

    }
    if (b > c && c > a) {
      b--;
      a++;
    }
    if (c > a && a > b) {
      c--;
      b++;
    }
    if (c > b && b > a) {
      c--;
      a++;
    }
    // console.log(`a = ${a}`)
    // console.log(`b = ${b}`)
    // console.log(`c = ${c}`)
    // console.log('----------')
    rounds++;
    if (a === b || a === c || b === c) return rounds;
     
  }
}

// console.log(countRounds('1 1 1'))


for (let tc = 0; tc < t; tc++) {
  const s = input[idx++].trim();
  const res = countRounds(s);
  results.push(res);
}

console.log(results.join('\n'));
