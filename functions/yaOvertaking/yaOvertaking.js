// const readline = require('readline');
import readline from 'readline';

const countOvertakes = (n, t, s, speeds) => {
  const cars = [];
  for (let i = 0; i < n; i++) {
    cars.push({ index: i, speed: speeds[i] });
  }

  let rounds = [];

  for (let i = 0; i < n; i++) {
    let currentCarDistance = cars[i].speed * t;
    let currentCarRound = currentCarDistance / s;

    rounds.push(currentCarRound);
  }

  let overtaking = 0;

  for (let i = 1; i < n; i++) {
    if (rounds[0] > rounds[i]) {
      if (Number.isInteger(rounds[0]) && Number.isInteger(rounds[i])) overtaking += rounds[0] - rounds[i] - 1;
      else if (rounds[0] - rounds[i] < 1) overtaking++;
      // рассмотреть вариант, когда разница больше единцы и дробная часть у первого больше
      // рассмотреть вариант, когда разница больше единицы и дробная часть у первого меньше
    }
  }

  console.log(overtaking);
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

reader.on('line', (line) => {
  inputLines.push(line);

  if (inputLines.length === 2) {
    const [n, t, s] = inputLines[0].split(" ").map(Number);
    const speeds = inputLines[1].split(" ").map(Number);

    countOvertakes(n, t, s, speeds);

    // Для завершения программы после обработки ввода
    reader.close();
  }
});