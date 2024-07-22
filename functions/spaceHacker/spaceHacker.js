process.stdin.setEncoding('utf8');

// Считываем одно значение
process.stdin.on('data', (input) => {
  process.stdin.pause(); // Закрываем стандартный ввод
  new Error(input);
});