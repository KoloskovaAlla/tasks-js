// const readline = require('readline');
import readline from 'readline';

const countFloors = (n, t, floors, leavingEmployee) => {

  if (n !== floors.length) return;

  // В массиве нумерация с нуля, поэтому индекс будет на единицу меньше, чем место в очереди
  const indexOfLeavingEmployee = leavingEmployee - 1;

  let movements;

  // суммарное количество перемещений Кати, если по порядку
  let movementsByOrder = 0;
  for (let currentFloorIndex = 1; currentFloorIndex < n; currentFloorIndex++) {
    movementsByOrder += floors[currentFloorIndex] - floors[currentFloorIndex - 1]
  };


  // Перемещения до уходящего сотрудника, если идти по порядку
  let movementsToLeavingEmployee = 0;

  // Считаем перемещения до уходящего сотрудника, если идти по порядку
  for (let currentFloorIndex = 1; currentFloorIndex <= indexOfLeavingEmployee; currentFloorIndex++) {
    movementsToLeavingEmployee += floors[currentFloorIndex] - floors[currentFloorIndex - 1]
  };

  // если оказывается, что время до уходящего сотрудника, если идти по порядку, меньше, чем время через которое он уйдет
  if (movementsToLeavingEmployee < t) return movementsByOrder;
  else {
    // тут разобрать вариант, когда Катя едет сначала к уходящему, а потом ко всем остальным
    movements = 0;
    movements += floors[indexOfLeavingEmployee] - floors[0];
    floors.splice(indexOfLeavingEmployee, 1);
    for (let currentFloorIndex = 1; currentFloorIndex < floors.length; currentFloorIndex++) {
      movements += floors[currentFloorIndex] - floors[currentFloorIndex - 1]
    };

    return movements;
  }
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