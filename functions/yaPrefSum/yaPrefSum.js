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
  const length = Number(input[0]); // Первое значение - количество элементов
  const array = input[1].split(" ").map(Number); // Второе значение - массив чисел



  const prefSum = (length, array) => {

    let prefSumArray = new Array(length + 1);
    prefSumArray[0] = 0;
    let prefSum = 0;

    for (let index = 1; index < prefSumArray.length; index++) {
      prefSum += array[index - 1];

      prefSumArray[index] = prefSum;
    }
    console.log(prefSumArray.slice(1).join(" "));
  };

  prefSum(length, array);
});