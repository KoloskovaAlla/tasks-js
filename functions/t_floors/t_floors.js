// const readline = require('readline');
import readline from 'readline';

const countFloors = (n, t, floors, leavingEmployee) => {

  if (n !== floors.length) return;

  // В массиве нумерация с нуля, поэтому индекс будет на единицу меньше, чем место в очереди
  const indexOfLeavingEmployee = leavingEmployee - 1;

  let movements;

  // суммарное количество перемещений Кати, если по порядку
  // let movementsByOrder = 0;
  let movementsByOrder = floors[n - 1] - floors[0];
  // for (let currentFloorIndex = 1; currentFloorIndex < n; currentFloorIndex++) {
  //   movementsByOrder += floors[currentFloorIndex] - floors[currentFloorIndex - 1]
  // };
  // console.log(`${movementsByOrder} посчитала по циклу`);
  // const movementsByOrderAlt = floors[n - 1] - floors[0];
  // console.log(`${movementsByOrderAlt} вычла из последнего нулевой`);


  // Перемещения до уходящего сотрудника, если идти по порядку
  let movementsToLeavingEmployee = floors[indexOfLeavingEmployee] - floors[0];


  // если оказывается, что время до уходящего сотрудника, если идти по порядку, меньше, чем время через которое он уйдет
  if (movementsToLeavingEmployee <= t) return movementsByOrder;
  else {
    // тут разобрать вариант, когда Катя едет сначала к уходящему, а потом ко всем остальным

    let movementsDownUp = floors[indexOfLeavingEmployee] - floors[0];
    let movementsUpDown = floors[n - 1] - floors[indexOfLeavingEmployee];
    let movementsOneDirection;

    if (floors[0] === floors[indexOfLeavingEmployee]) movementsOneDirection = floors[n - 1] - floors[indexOfLeavingEmployee];
    if (floors[n - 1] === floors[indexOfLeavingEmployee]) movementsOneDirection = floors[indexOfLeavingEmployee] - floors[0];
    floors.splice(indexOfLeavingEmployee, 1);
    movementsDownUp += floors[n - 2] - floors[0];
    movementsUpDown += floors[n - 2] - floors[0];
    // for (let currentFloorIndex = 1; currentFloorIndex < floors.length; currentFloorIndex++) {
    //   movements += floors[currentFloorIndex] - floors[currentFloorIndex - 1]
    // };

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

    // Для завершения программы после обработки ввода
    reader.close();
  }
});