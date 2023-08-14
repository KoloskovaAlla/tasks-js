import readline from 'readline';
// const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pairs = [];

const canTransform = (str1, str2) => {
    //если строки разной длины, дальше можно не сравнивать и сразу вернуть NO
    if (str1.length !== str2.length || !/^[a-zA-Z]+$/.test(str1)) return 'NO';

    // Объект, где будут храниться пары символов
    const swap = {};

    // Цикл для посимвольного прохождения по строкам
    const str1Chars = str1.split('');
    str1Chars.forEach((str1Char, index) => {
        const str2Char = str2[index];
    });
    for (let index = 0; index < str1.length; index++) {
        const currentChar1 = str1[index]; // текущий символ из первой строки
        const currentChar2 = str2[index]; // текущий символ из второй строки

        //Если у символа из первой строки еще нет пары, добавляем пару
        if (!swap[currentChar1]) swap[currentChar1] = currentChar2;

        //Если у символа из второй строки еще нет пары, добавляем ему пару
        if (!swap[currentChar2]) swap[currentChar2] = currentChar1;

        //Является ли пара взаимной
        if (swap[currentChar1] !== currentChar2 || swap[currentChar2] !== currentChar1) return 'NO';
    };

    return 'YES';
};

let count = 0;

let currentPair = [];

reader.on('line', (line) => {
    if (count === 0) {
        count = parseInt(line);
    } else {
        currentPair.push(line.trim());
        if (currentPair.length === 2) {
            pairs.push(currentPair);
            currentPair = [];
            count--;
        }

        if (count === 0) {
            // const result = pairs.map(pair => canTransform(pair[0], pair[1]));
            // result.forEach(res => console.log(res));
            pairs.map((pair) => console.log(canTransform(pair[0], pair[1])))
            reader.close();
        }
    }
});
