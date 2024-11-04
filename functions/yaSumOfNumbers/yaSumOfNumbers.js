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
    const prefixSumsCount = { 0: 1 }; // Инициализация с нулевой префиксной суммой


    // for (let index = 1; index < prefSumArray.length; index++) {
    //   prefSum += carsArray[index - 1];
    //   prefSumArray[index] = prefSum;
    // }

    let countSets = 0;

    for (let index = 1; index < prefSumArray.length; index++) {
      prefSum += carsArray[index - 1]; // Обновляем префиксную сумму
      prefSumArray[index] = prefSum;

      // Проверяем, есть ли префиксная сумма S - K
      const target = prefSum - luckySum;
      if (prefixSumsCount[target]) {
        countSets += prefixSumsCount[target]; // Увеличиваем счетчик
      }

      // Обновляем количество текущей префиксной суммы в хеш-таблице
      prefixSumsCount[prefSum] = (prefixSumsCount[prefSum] || 0) + 1;
    }

    // console.log(prefSumArray);
    // console.log("----------------------");
    // console.log(prefixSumsCount);

    console.log(countSets);
  };

  sumOfNumbers(numberOfCars, luckySum, carsArray);
});