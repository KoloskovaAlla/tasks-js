process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
var lineCount = 0; // Счетчик введенных строк
let numberOfStations;
let arr = [];

process.stdin.on("data", function (input) {
  stdin_input += input;  // get the input

  if (lineCount === 0) {
    numberOfStations = Number(input);
  }

  if (lineCount !== 0) {
    arr.push(Number(input));
  };

  lineCount++;

  if (lineCount === numberOfStations + 1) {
    main(arr); // Убираем лишние пробелы
    process.stdin.pause(); // Останавливаем ввод
  }
});
process.stdin.on("end", function () {
  main(stdin_input);
});
function main(input) {
  // do something
  console.log(input)
  console.log('дело сделано')
  // process.stdout.write(input); // print response to stdout
}