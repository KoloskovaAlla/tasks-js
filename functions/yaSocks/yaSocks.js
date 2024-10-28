const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

// Чтение данных построчно
rl.on("line", (line) => {
  input.push(Number(line));
  if (input.length === 4) {
    rl.close();
  }
});

const findKit = (a, b, c, d) => {
  const attemtsForBlueTShirts = b + 1;
  const attemtsForBlueSocks = d + 1;
  const blueKit = attemtsForBlueTShirts + attemtsForBlueSocks;

  const attemtsForRedTShirt = a + 1;
  const attemtsForRedSocks = c + 1;
  const redKit = attemtsForRedTShirt + attemtsForRedSocks;

  if (a === b) {
    const minSocks = attemtsForBlueSocks < attemtsForRedSocks ? attemtsForBlueSocks : attemtsForRedSocks;
    const minTShirts = attemtsForRedTShirt < attemtsForBlueTShirts ? attemtsForRedTShirt : attemtsForBlueTShirts;
    const variantForOneTShirt = 1 + minSocks;
    const variantForOnePairSocks = minTShirts + 1;
    if (variantForOneTShirt < variantForOnePairSocks) {
      // console.log('вариант 1 + ....')
      // 1 + ...
      if (attemtsForBlueSocks < attemtsForRedSocks) return (1 + ' ' + attemtsForBlueSocks)
      else return (1 + ' ' + attemtsForRedSocks);
    }
    else {
      // console.log('вариант ... + 1')
      // ...+1
      if (attemtsForBlueTShirts < attemtsForRedSocks) return (attemtsForBlueTShirts + ' ' + 1)
      else return (attemtsForRedSocks + ' ' + 1);
    }
  };
  if (a === 0) return (1 + ' ' + attemtsForRedSocks);
  if (b === 0) return (1 + ' ' + attemtsForBlueSocks);
  if (c === 0) return (attemtsForRedTShirt + ' ' + 1);
  if (d === 0) return (attemtsForBlueTShirts + ' ' + 1);

  if (attemtsForBlueTShirts - attemtsForRedTShirt === 1) return (attemtsForBlueTShirts + ' ' + 1);
  if (attemtsForRedTShirt - attemtsForBlueTShirts === 1) return (attemtsForRedTShirt + ' ' + 1);

  // console.log('для синих ' + attemtsForBlueTShirts + ' и ' + attemtsForBlueSocks + ', сумма ' + blueKit);
  // console.log('для красных ' + attemtsForRedTShirt + 'и ' + attemtsForRedSocks + ', сумма ' + redKit);

  if (blueKit < redKit) {
    // console.log('синих меньше');
    const maxTShirts = a > b ? a + 1 : b + 1;
    const variantWithMaxTshirts = maxTShirts + 1;

    const maxSocks = c > d ? c + 1 : d + 1;
    const variantWithMaxSocks = maxSocks + 1;

    if (blueKit < variantWithMaxTshirts && blueKit < variantWithMaxSocks) return attemtsForBlueTShirts + ' ' + attemtsForBlueSocks;
    if (variantWithMaxTshirts < blueKit && variantWithMaxTshirts < variantWithMaxSocks) return maxTShirts + ' ' + 1;
    if (variantWithMaxSocks < variantWithMaxTshirts && variantWithMaxSocks < blueKit) return 1 + ' ' + maxSocks;

  }
  else {
    // console.log('попыток для красных меньше')

    const maxTShirts = a > b ? a + 1 : b + 1;
    const variantWithMaxTshirts = maxTShirts + 1;

    const maxSocks = c > d ? c + 1 : d + 1;
    const variantWithMaxSocks = maxSocks + 1;

    if (redKit < variantWithMaxTshirts && redKit < variantWithMaxSocks) return attemtsForRedTShirt + ' ' + attemtsForRedSocks;
    if (variantWithMaxTshirts < redKit && variantWithMaxTshirts < variantWithMaxSocks) return maxTShirts + ' ' + 1;
    if (variantWithMaxSocks < variantWithMaxTshirts && variantWithMaxSocks < redKit) return 1 + ' ' + maxSocks;


  }
}

rl.on("close", () => {
  const [a, b, c, d] = input;

  console.log(findKit(a, b, c, d));
});
