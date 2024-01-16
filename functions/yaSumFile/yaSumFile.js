const fs = require('fs');

const sum = (a, b) => {
  return a + b;
};

// Чтение из файла
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Обработка данных из файла
  const [a, b] = data.trim().split(' ').map(Number);
  const result = sum(a, b);

  // Запись результата в файл
  fs.writeFile('output.txt', result.toString(), (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Результат успешно записан в output.txt');
  });
});