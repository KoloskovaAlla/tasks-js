import fs from 'fs';

export const datesWithoutLogs = (inputFilePath, outputFilePath) => {
  fs.readFile(inputFilePath, 'utf8', (error, data) => {
    if (error) {
      console.error('Ошибка при чтении файла:', err);
    } else {
    
     const isTheSameDay = (time1, time2) => {
      const [hh1, mm1, ss1] = time1.split(':').map(Number);
      const [hh2, mm2, ss2] = time2.split(':').map(Number);

  

      const t1 = hh1*3600 + mm1*60 + ss1;
  
      const t2 = hh2*3600 + mm2*60 + ss2;
   
     
      return t1 < t2;
      };

      const logs = (inputData) => {
        const lines = inputData.trim().split('\n');
        const n = parseInt(lines[0], 10);
        const events = lines.slice(1);
        console.log(events)

        let minDays = 1;

        for (let i = 1; i < n; i++) {
          const prevEvent = events[i - 1];
          console.log(prevEvent)
          console.log(prevEvent)
          const currEvent = events[i];

          if (!isTheSameDay(prevEvent, currEvent)) {          
            minDays++;
          }
        }

        return `${minDays}`;
      }

      const result = logs(data);

      // Запись обработанных данных в output.txt
      fs.writeFile(outputFilePath, result, 'utf8', (error) => {
        if (error) {
          console.error('Ошибка при записи файла:', err);
        } else {
          console.log('Данные успешно обработаны и записаны в output.txt');
          
        }
      });
    }
  });
};

const inputFilePath = './functions/datesWithoutLogs/input.txt';
const outputFilePath = './functions/datesWithoutLogs/output.txt';

datesWithoutLogs(inputFilePath, outputFilePath);