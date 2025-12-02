const readline = require('readline');

function solve(R, B) {
  const sqrtB = BigInt(Math.floor(Math.sqrt(Number(B))));
  for (let d = 1n; d <= sqrtB; d++) {
    if (B % d === 0n) {
      // первая пара (d, B/d)
      let H = d + 2n;
      let W = B / d + 2n;
      let Rcalc = 2n * W + 2n * H - 4n;
      if (Rcalc === R && W >= H) {
        console.log(String(W) + ' ' + String(H));
        return;
      }

      // вторая пара (B/d, d)
      H = B / d + 2n;
      W = d + 2n;
      Rcalc = 2n * W + 2n * H - 4n;
      if (Rcalc === R && W >= H) {
        console.log(String(W) + ' ' + String(H));
        return;
      }
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const [Rstr, Bstr] = input.trim().split(/\s+/);
  const R = BigInt(Rstr);
  const B = BigInt(Bstr);
  solve(R, B);  
  rl.close();
});
