// const readline = require('readline');
import readline from 'readline';

const countOvertakes = (n, t, s, speeds) => {

  let lowSpeeds = [];

  for (let i = 0; i < n; i++) {
    if (speeds[0] > speeds[i]) lowSpeeds.push(speeds[i])
  }

  const length = lowSpeeds.length;


  let overtaking = 0;
  const fractPart0 = speeds[0] / s * t % 1;

  for (let i = 0; i < length; i++) {
    const fractPartI = lowSpeeds[i] % 1;

    const dif = (speeds[0] - lowSpeeds[i]) / s * t
    if (fractPart0 === fractPartI) overtaking += dif - 1;
    else overtaking += (dif - dif % 1);


  }

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