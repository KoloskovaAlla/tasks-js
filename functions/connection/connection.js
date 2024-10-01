process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";
let lineCount = 0;
let numberOfStations;
let arr = [];

process.stdin.on("data", function (input) {
  stdin_input += input;

  let inputLines = stdin_input.trim().split("\n");  // Разделяем строки

  if (lineCount === 0) {
    numberOfStations = Number(inputLines[0]);  // Первая строка — количество станций
  }

  // Если введены все строки (первая строка + данные для всех станций)
  if (inputLines.length === numberOfStations + 1) {
    for (let i = 1; i <= numberOfStations; i++) {
      arr.push(Number(inputLines[i]));  // Остальные строки — значения счетчиков
    }

    main(arr);  // Вызываем основную функцию
    process.stdin.pause();  // Останавливаем ввод
  }

  lineCount = inputLines.length;  // Обновляем количество строк
});

function main(arr) {
  let sumOfNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfNumbers += arr[i];  // Суммируем значения массива
  }

  if (sumOfNumbers % 2 === 0) {
    console.log(1);  // Если сумма четная, выводим 1
  } else {
    console.log(0);  // Если сумма нечетная, выводим 0
  }
}