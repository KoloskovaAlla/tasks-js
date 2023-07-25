import readline from 'readline';

const isTheSameDay = (time1, time2) => {
  const [hh1, mm1, ss1] = time1.split(':').map(Number);
  const [hh2, mm2, ss2] = time2.split(':').map(Number);

  const t1 = hh1 * 3600 + mm1 * 60 + ss1;
  const t2 = hh2 * 3600 + mm2 * 60 + ss2;


  return t1 < t2;
};

const countDays = (array) => {

  const n = parseInt(array[0], 10);
  const events = array.slice(1);

  let minDays = 1;

  for (let i = 1; i < n; i++) {
    const prevEvent = events[i - 1];
    const currEvent = events[i];

    if (!isTheSameDay(prevEvent, currEvent)) {
      minDays++;
    }
  }

  return minDays;
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];

reader.on('line', (line) => {
  arr = line.trim().split(' ');
  console.log(arr);
});

reader.on('close', () => {
  console.log(countDays(arr));
});




