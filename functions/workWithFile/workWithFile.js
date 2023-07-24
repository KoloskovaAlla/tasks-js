import fs from 'fs';

// const workWithFile = () => {
//   let result;
//   fs.readFile('./functions/workWithFile/input.txt', 'utf8', (error, data) => {
//     if (error) {
//       console.error('Ошибка при чтении файла:', err);
//     } else {
//       console.log('Содержимое файла:', data);
//       result = data;
//     }
//   });
//   result = data + 'обработаны, результат получен';

//   fs.writeFile("./functions/workWithFile/hello.txt", result)

// };

// workWithFile();

const readAndProcessFile = (inputFilePath, outputFilePath) => {
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла:', err);
    } else {
      // Обработка данных (здесь просто пример, можете вставить ваш код обработки)
      const processedData = data.toUpperCase();

      // Запись обработанных данных в output.txt
      fs.writeFile(outputFilePath, processedData, 'utf8', (err) => {
        if (err) {
          console.error('Ошибка при записи файла:', err);
        } else {
          console.log('Данные успешно обработаны и записаны в output.txt');
        }
      });
    }
  });
};

const inputFilePath = './functions/workWithFile/input.txt';
const outputFilePath = './functions/workWithFile/output.txt';

readAndProcessFile(inputFilePath, outputFilePath);