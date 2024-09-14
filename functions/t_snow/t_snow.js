const readline = require('readline');

const processSnowDepth = (n, snowDepth) => {
  // Массив для хранения выпавшего снега
  const snowfall = new Array(n);
  
  // Восстанавливаем пропущенные данные
  let lastValidDepth = 0; // Глубина на предыдущем известном дне
  for (let i = 0; i < n; i++) {  
    if (snowDepth[i] > 0) {
      // console.log('мы можем посчитать просто')
      if (i === 0)  snowfall[0] =snowDepth[0]
      else snowfall[i] = snowDepth[i] - snowDepth[i-1];       
    }
    else {
      // console.log('данные по глубине за этот день осутствуют')
    }  
  }
  // console.log('YES');
  // console.log(snowfall.join(' ')); // Выводим количество снега за каждый день
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

reader.on('line', (line) => {
  inputLines.push(line);
  if (inputLines.length === 2) {
    const n = parseInt(inputLines[0], 10);
    const snowRecords = inputLines[1].split(' ').map(Number);
    processSnowDepth(n, snowRecords);
    reader.close();
  }
});
