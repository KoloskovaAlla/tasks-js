import readline from 'readline';
// var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let minCuts = 0;
process.stdin.on('end', () => { console.log(minCuts); process.exit(0); });
rl.on('line', function (N) { 
  N = parseInt(N)     
  function cuts(n) {
    let count = 0;
    if (n<=1) return 0;
        while (n > 0) {
            if (n % 2 === 0) {
                n = n >> 1; // Сдвиг вправо эквивалентен делению на 2
            } else {
                n--;
            }
            count++;
        }
        return count - 1;
}
  minCuts = cuts(N)
  console.log(minCuts)
});