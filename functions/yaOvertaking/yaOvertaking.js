// const readline = require('readline');
import readline from 'readline';

// function customFloor(input) {
//   // Разбиваем строку на целую и дробную части
//   const [integerPart, decimalPart] = input.split('.');

//   // Возвращаем только целую часть
//   return integerPart;
// }

const countOvertakes = (n, t, s, speeds) => {
  if (speeds.length !== n) return;
  let rounds = [];

  for (let i = 0; i < n; i++) {
    const currentCarRound = speeds[i] * t / s;
    rounds.push(currentCarRound);
  }

  let overtaking = 0;
  const intPart = Math.floor(rounds[0]);
  const fractPart0 = rounds[0] - Math.floor(rounds[0]);

  for (let i = 1; i < n; i++) {
    const fractPartI = rounds[i] - Math.floor(rounds[i]);
    const dif = rounds[0] - rounds[i];
    if (dif > 1) {
      if (fractPart0 === fractPartI) overtaking += dif - 1;
      else overtaking += Math.floor(dif);

    }
  }

  // console.log(overtaking);
  return (overtaking);
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

reader.on('line', (line) => {
  inputLines.push(line);

  if (inputLines.length === 2) {
    const trackData = inputLines[0].split(' ').map(Number);
    const n = trackData[0];
    const t = trackData[1];
    const s = trackData[2];
    const speeds = inputLines[1].split(' ').map(Number);

    console.log(countOvertakes(n, t, s, speeds));

    // Для завершения программы после обработки ввода
    reader.close();
  }
});