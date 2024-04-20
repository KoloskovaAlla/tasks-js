const readline = require('readline');


const maxMushrooms = (n, forest) => {
    let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(3).fill(0);
  }

    // Начинаем с последней строки
    for (let i = n - 1; i >= 0; i--) {
        // console.log(`мы сейчас на строке ${i}`);
        for (let j = 0; j < 3; j++) {
            // Проверяем, что клетка не является кустом
            if (forest[i][j] !== 'W') {
                // Добавляем количество грибов в текущей клетке
                dp[i][j] = forest[i][j] === 'C' ? 1 : 0;               

                // Выбираем максимальное количество грибов из трех возможных направлений
                if (i < n - 1) {
                    dp[i][j] += Math.max(dp[i + 1][j - 1] || 0, dp[i + 1][j] || 0, dp[i + 1][j + 1] || 0);
                }
            }
        }
    }

    // Находим максимальное количество грибов в первой строке
    let maxMushrooms = Math.max(...dp[0]);
    return maxMushrooms;
};

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let n;
let forest = [];

reader.on('line', (line) => {
    inputLines.push(line);
  //  console.log('test')
    if (inputLines.length === 1) {
        // Парсим количество строк в лесу
        n = parseInt(line);
       
   } else if (inputLines.length > 1 && inputLines.length <= n+1) {
        // Парсим строки леса
        forest.push(line.split(''));
        // console.log(inputLines.length);
        
        if (inputLines.length === n + 1) {
            // Все входные данные получены
            console.log(maxMushrooms(n, forest));
            reader.close();
        }
      } 
});