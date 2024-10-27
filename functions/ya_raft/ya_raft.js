const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

// Чтение данных построчно
rl.on("line", (line) => {
  input.push(Number(line));
  if (input.length === 6) {
    rl.close();
  }
});

function findNearestPoint(x1, y1, x2, y2, x, y) {
    // Проверка углов
    if (x < x1 && y > y2) return "NW";
    if (x > x2 && y > y2) return "NE";
    if (x < x1 && y < y1) return "SW";
    if (x > x2 && y < y1) return "SE";

    // Проверка сторон
    if (y > y2) return "N";
    if (y < y1) return "S";
    if (x < x1) return "W";
    if (x > x2) return "E";
  }

rl.on("close", () => {
  const [x1, y1, x2, y2, x, y] = input; 

  console.log(findNearestPoint(x1, y1, x2, y2, x, y));
});
