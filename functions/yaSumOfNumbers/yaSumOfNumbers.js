const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

// Чтение данных построчно
rl.on("line", (line) => {
  input.push(line.trim()); // Сохраняем введенную строку, удаляя лишние пробелы
  if (input.length === 2) {
    rl.close();
  }
});

// Обработка данных после завершения ввода
rl.on("close", () => {
  const [numberOfCars, luckySum] = input[0].split(" ").map(Number);
  const carsArray = input[1].split(" ").map(Number);





  const sumOfNumbers = (numberOfCars, luckySum, carsArray) => {
    let numberOfSets;

    let prefSumArray = new Array(carsArray.length + 1);

    prefSumArray[0] = 0;
    let prefSum = 0;

    for (let index = 1; index < prefSumArray.length; index++) {
      prefSum += carsArray[index - 1];
      prefSumArray[index] = prefSum;
    }

    console.log(prefSumArray);

    // console.log(numberOfSets);
  };

  sumOfNumbers(numberOfCars, luckySum, carsArray);
});