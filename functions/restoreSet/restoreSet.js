const readline = require('readline');

const restoreSet = (string) => {
  // Массив для хранения чисел
  const numbers = [];

  // Разбиваем строку по запятым
  const ranges = string.split(',');

  // Обрабатываем каждую часть
  ranges.forEach(range => {
    if (range.includes('-')) {
      // Если это диапазон, разбиваем по дефису и добавляем все числа в диапазоне
      const [start, end] = range.split('-').map(Number);
      for (let i = start; i <= end; i++) {
        numbers.push(i);
      }
    } else {
      // Если это одно число, добавляем его
      numbers.push(Number(range));
    }
  });

  // Сортируем числа по возрастанию
  numbers.sort((a, b) => a - b);

  // Выводим результат через пробел
  console.log(numbers.join(' '));
};

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    restoreSet(line);
    reader.close(); // Закрываем ввод после обработки строки
});
