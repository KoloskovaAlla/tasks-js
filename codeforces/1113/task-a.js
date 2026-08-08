const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let idx = 0;
const t = parseInt(input[idx++], 10);
const results = [];

const removeAlica = (s) => {
  const length = s.length;
  let isRemoved = false;
  let currentIndex = 1;
  if (s[0] === '0') {
    return s.slice(1);
  }
  while (!isRemoved) {
    if (s[currentIndex] === '0') {
      isRemoved = true;
      return s.slice(0, currentIndex) + s.slice(currentIndex + 1);
    }
    else { currentIndex++ }
  }

};

const removeBob = (s) => {
  let stringAfterAlice = removeAlica(s);

  let isRemoved = false;
  let currentIndex = 0;
  while (!isRemoved) {
    if (stringAfterAlice[currentIndex] === '1') {
      isRemoved = true;
      return stringAfterAlice.slice(0, currentIndex) + stringAfterAlice.slice(currentIndex + 1);
    }
    else { currentIndex++ }
  }

};

for (let tc = 0; tc < t; tc++) {
  const s = input[idx++].trim();
  const res = removeBob(s);
  results.push(res);
}

console.log(results.join('\n'));

