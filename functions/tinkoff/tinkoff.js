import readline from 'readline';

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let minCuts = 0;
process.stdin.on('end', () => { console.log(minCuts); process.exit(0); });
rl.on('line', function (N) {
  N = parseInt(N)
  if (N === 1) minCuts = 0;
  else if (N % 2 === 0) { minCuts = N / 2 }
  else { minCuts = (N - 1) / 2 + 1 }
  console.log(minCuts)
  console.log('------')
});