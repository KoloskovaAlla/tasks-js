const readline = require('readline');

const printDirectories = (n, directories) => {
  let directoryTree = {};

  const addDirectory = (path) => {
    let parts = path.split('/');
    let currentLevel = directoryTree;
    parts.forEach((part, index) => {
      if (!currentLevel[part]) {
        currentLevel[part] = {};
      }
      // Если это последняя часть пути, значит это конечная директория
      if (index === parts.length - 1) {
        currentLevel[part].name = part;
      }
      currentLevel = currentLevel[part];
    });
  }

  directories.forEach(directory => {
    addDirectory(directory);
  });

  const printDirectory = (level, directory) => {
    let indent = '  '.repeat(level); // Рассчитываем отступ на основе уровня вложенности
    console.log(indent + directory.name); // Выводим имя директории, а не объект
    let subdirectories = Object.keys(directory).sort(); // Сортируем поддиректории по алфавиту
    subdirectories.forEach(subdirectory => {
      if (subdirectory !== 'name') {
        printDirectory(level + 1, directory[subdirectory]); // Рекурсивно выводим поддиректории с отступом на два пробела больше
      }
    });
  }

  let root = Object.keys(directoryTree).sort()[0]; // Берем первую корневую директорию (по условию задачи их одна)
  printDirectory(0, directoryTree[root]);

};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

reader.on('line', (line) => {
  inputLines.push(line);
  // Получаем количество директорий
  const n = parseInt(inputLines[0]);
  // Если количество строк ввода равно n + 1 (где n - количество директорий), то все строки ввода прочитаны
  if (inputLines.length === n + 1) {

    // Получаем абсолютные пути к директориям (начиная со второй строки)
    const directories = inputLines.slice(1); // Просто используем строки директорий
    // Вызываем функцию для печати директорий
    printDirectories(n, directories);
    // Закрываем читатель
    reader.close();
  }
});