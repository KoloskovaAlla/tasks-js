export const logs = (input) => {
  const compareTimes = (time1, time2) => {
  const [hh1, mm1, ss1] = time1.split(':').map(Number);
  const [hh2, mm2, ss2] = time2.split(':').map(Number);

  if (hh1 !== hh2) return hh1 < hh2;
  if (mm1 !== mm2) return mm1 < mm2;
  return ss1 < ss2;
  }
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const events = lines.slice(1);

  let minDays = 1;

  for (let i = 1; i < n; i++) {
    const prevEvent = events[i - 1];
    const currEvent = events[i];

    if (compareTimes(currEvent, prevEvent)) {
      minDays++;
    }
  }

  return minDays;
}

console.log(minDays())


