const readline = require('readline');

const restoreSet = (sequence, requiredSet, k) => {
  const n = sequence.length;
  let bestStart = -1;
  let bestEnd = -1;
  let minLen = Infinity;

  let left = 0;
  const currentCount = {};
  let countCovered = 0;
  const requiredCount = requiredSet.size;

  for (let right = 0; right < n; right++) {
    const char = sequence[right];
    if (requiredSet.has(char)) {
      if (!currentCount[char]) {
        currentCount[char] = 0;
      }
      currentCount[char]++;
      if (currentCount[char] === 1) {
        countCovered++;
      }
    }

    while (countCovered === requiredCount) {
      const currentLen = right - left + 1;
      if (currentLen <= k) {
        if (currentLen < minLen || 
           (currentLen === minLen && left > bestStart)) {
          minLen = currentLen;
          bestStart = left;
          bestEnd = right;
        }
      }
      const charLeft = sequence[left];
      if (requiredSet.has(charLeft)) {
        currentCount[charLeft]--;
        if (currentCount[charLeft] === 0) {
          countCovered--;
        }
      }
      left++;
    }
  }

  if (bestStart === -1) {
    return -1;
  }
  return sequence.substring(bestStart, bestEnd + 1);
};

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
reader.on('line', (line) => {
   input.push(line);
   if (input.length === 3) {
       const sequence = input[0];
       const requiredSet = new Set(input[1]);
       const k = parseInt(input[2]);
       const result = restoreSet(sequence, requiredSet, k);
       console.log(result);
       reader.close();
   }
});
