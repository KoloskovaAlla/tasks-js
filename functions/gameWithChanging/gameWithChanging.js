import readline from 'readline';
// const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pairs = [];
let count = 0;
let currentPair = [];

const areStrsCorrect = (str1, str2) => {
  const isLengthEqual = str1.length === str2.length;
  const isStr1Latin = /^[a-zA-Z]+$/.test(str1);
  const isStr2Latin = /^[a-zA-Z]+$/.test(str2);
  return isLengthEqual && isStr1Latin && isStr2Latin;
};

const canTransform = (str1, str2) => {
  if (!areStrsCorrect(str1, str2)) return 'NO';

  const swap = {};
  const str1Chars = str1.split('');
  let hasNonMutualPair;

  const hasMismatch = (char1, char2) => swap[char1] !== char2;

  str1Chars.forEach((str1Char, index) => {
    const str2Char = str2[index];

    if (!swap[str1Char]) swap[str1Char] = str2Char;
    if (!swap[str2Char]) swap[str2Char] = str1Char;

    const hasMismatchFromStr1 = hasMismatch(str1Char, str2Char);
    const hasMismatchFromStr2 = hasMismatch(str2Char, str1Char);
    hasNonMutualPair = hasMismatchFromStr1 || hasMismatchFromStr2;
  });

  return hasNonMutualPair ? 'NO' : 'YES'
};

reader.on('line', (line) => {
  if (count === 0) {
    count = parseInt(line);
  } else {
    currentPair.push(line.trim());
    if (currentPair.length === 2) {
      pairs.push(currentPair);
      currentPair = [];
      count--;
    }

    if (count === 0) {
      pairs.map((pair) => console.log(canTransform(pair[0], pair[1])))
      reader.close();
    }
  }
});
