const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, r] = input[0].split(" ").map(Number);
  const distances = input[1].split(" ").map(Number);

  let count = 0;

  const countVariants = (n, r, distances) => {
    let numberOfSets;
    let countSets = 0;
    let prefSumArray = new Array(carsArray.length + 1);
    prefSumArray[0] = 0;
    let prefSum = 0;
    const prefixSumsCount = { 0: 1 }; // Инициализация с нулевой префиксной суммой

    for (let index = 1; index < prefSumArray.length; index++) {
      prefSum += distances[index - 1]; // Обновляем префиксную сумму
      prefSumArray[index] = prefSum; // Добавляем префиксную сумму в массив преф.сумм

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
  
  countVariants(n, r, distances);
});