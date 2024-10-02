process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
var lines = 0; // Счетчик строк

process.stdin.on("data", function (input) {
  stdin_input += input;  // get the input
  lines += (input.match(/\n/g) || []).length; // Считаем количество новых строк

  if (lines >= 3) {  // Если введено 3 строки
    process.stdin.pause(); // Останавливаем ввод
    main(stdin_input);
  }
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  const [a, b, u] = input.trim().split('\n').map(Number); // разбиваем входные данные

  let result;
  if (u <= 100) {
    result = a;  // если трафик не превышает 100 GiB
  } else {
    result = a + (u - 100) * b;  // если трафик превышает 100 GiB
  }


  process.stdout.write(result.toString() + '\n'); // выводим результат
}