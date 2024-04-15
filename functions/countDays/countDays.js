const readline = require('readline');
// import readline from 'readline';

const isTheSameDay = (time1, time2) => {
  const [hh1, mm1, ss1] = time1.split(':').map(Number);
  const [hh2, mm2, ss2] = time2.split(':').map(Number);

  const t1 = hh1*3600 + mm1*60 + ss1;  
  const t2 = hh2*3600 + mm2*60 + ss2; 
     
  return t1 < t2;
};
let minDays = 1;
const countDays = (numberOfTimeCuts, timeCutsArray) => {
  for (let i = 1; i < numberOfTimeCuts; i++) {
    const prevTimeCut = timeCutsArray[i - 1];
    const currTimeCut = timeCutsArray[i];

    if (!isTheSameDay(prevTimeCut, currTimeCut)) {
      minDays++;
    }
  }
  return minDays;
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
reader.on('line', (line) => {
  inputLines.push(line);
});

reader.on('close', () => {  
  const numberOfTimeCuts = parseInt(inputLines[0]);
  let timeCutsArray = [];
  for (let i = 0; i < numberOfTimeCuts; i++) {
    timeCutsArray.push(inputLines[i+1]);
  }
  console.log(countDays(numberOfTimeCuts, timeCutsArray));
});
