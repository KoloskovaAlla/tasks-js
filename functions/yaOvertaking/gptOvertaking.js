// const readline = require('readline');
import readline from 'readline';



const countOvertakes = (n, t, s, speeds) => {
  let rounds = [];

  for (let i = 0; i < n; i++) {
    // let currentCarRound = speeds[i] * t / s;
    let currentCarRound = Math.floor(speeds[i] * t / s);

    rounds.push(currentCarRound);
  }

  let overtaking = 0;

  for (let i = 1; i < n; i++) {


    if (rounds[0] - rounds[i] > 1) {
      overtaking += rounds[0] - rounds[i] - 1;
    }
  }

  return overtaking;
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
    const speeds = inputLines[1].split(' ').map(BigInt);

    console.log(countOvertakes(n, t, s, speeds));

    // Для завершения программы после обработки ввода
    reader.close();
  }
});