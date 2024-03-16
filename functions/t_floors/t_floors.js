const readline = require('readline');
// import readline from 'readline';

const countFloors = (n, t, floors, leavingEmployee) => {

  if (n !== floors.length) return;

  const indexOfLeavingEmployee = leavingEmployee - 1;

  let movements;
  let movementsByOrder = floors[n - 1] - floors[0];
  let movementsToLeavingEmployee = floors[indexOfLeavingEmployee] - floors[0];


  if (movementsToLeavingEmployee <= t) return movementsByOrder;
  else {
    let movementsDownUp = floors[indexOfLeavingEmployee] - floors[0];
    let movementsUpDown = floors[n - 1] - floors[indexOfLeavingEmployee];
    let movementsOneDirection;

    if (floors[0] === floors[indexOfLeavingEmployee]) movementsOneDirection = floors[n - 1] - floors[indexOfLeavingEmployee];
    if (floors[n - 1] === floors[indexOfLeavingEmployee]) movementsOneDirection = floors[indexOfLeavingEmployee] - floors[0];
    floors.splice(indexOfLeavingEmployee, 1);
    movementsDownUp += floors[n - 2] - floors[0];
    movementsUpDown += floors[n - 2] - floors[0];

    if (floors[0] !== floors[indexOfLeavingEmployee] && floors[n - 1] !== floors[indexOfLeavingEmployee]) return Math.min(movementsDownUp, movementsUpDown);
    else return movementsOneDirection
  };
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

reader.on('line', (line) => {
  inputLines.push(line);

  if (inputLines.length === 3) {

    const firstString = inputLines[0].split(' ').map(Number);
    const n = firstString[0];
    const t = firstString[1];
    const floors = inputLines[1].split(' ').map(Number);
    const leavingEmployee = Number(inputLines[2])

    console.log(countFloors(n, t, floors, leavingEmployee));

    reader.close();
  }
});