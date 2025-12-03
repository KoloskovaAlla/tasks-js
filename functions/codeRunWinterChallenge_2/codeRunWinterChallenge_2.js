const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nums = [];

rl.on('line', (input) => {
  nums.push(parseInt(input, 10));

  if (nums.length === 10) {
    const answer = solve(nums);
    console.log(answer);
    rl.close();
  }
});

// функция решения
function solve(nums) {
  const target = 100;
  let bestSum = 0;
  let bestDiff = Infinity;

  for (let mask = 0; mask < (1 << 10); mask++) {
    let sum = 0;

    for (let i = 0; i < 10; i++) {
      if (mask & (1 << i)) {
        sum += nums[i];
      }
    }

    const diff = Math.abs(sum - target);

    if (diff < bestDiff || (diff === bestDiff && sum > bestSum)) {
      bestDiff = diff;
      bestSum = sum;
    }
  }

  return bestSum;
}

