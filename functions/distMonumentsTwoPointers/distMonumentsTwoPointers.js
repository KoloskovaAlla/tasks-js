const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

// Чтение данных построчно
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    rl.close();
  }
});

// Обработка данных после завершения ввода
rl.on("close", () => {
  const [n, r] = input[0].split(" ").map(Number); // Первое значение - количество памятников и r
  const distances = input[1].split(" ").map(Number); // Второе значение - массив расстояний

  // Метод двух указателей
  let totalWays = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    while (j < n && distances[j] - distances[i] <= r) {
      j++;
    }
    totalWays += n - j; // Все памятники от j до n-1 подходят
  }

  console.log(totalWays);
});