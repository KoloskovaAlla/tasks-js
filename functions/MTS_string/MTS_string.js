process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
var lineCount = 0; // Счетчик введенных строк

process.stdin.on("data", function (input) {
  stdin_input += input;  // Сохраняем введенные данные
  lineCount++; // Увеличиваем счетчик строк

  // Если введена первая строка, вызываем main и останавливаем дальнейший ввод
  if (lineCount === 1) {
    main(stdin_input.trim()); // Убираем лишние пробелы
    process.stdin.pause(); // Останавливаем ввод
  }
});

function main(input) {
  const target = "MTS";
  let targetIndex = 0; // Индекс текущего символа в целевой строке

  for (let char of input) {
    if (char === target[targetIndex]) {
      targetIndex++;
      // Если мы нашли все три буквы, выходим из цикла
      if (targetIndex === target.length) {
        console.log(1); // Строка является MTS-строкой
        return;
      }
    }
  }

  console.log(0); // Строка не является MTS-строкой
  // process.stdout.write(input); // print response to stdout
}