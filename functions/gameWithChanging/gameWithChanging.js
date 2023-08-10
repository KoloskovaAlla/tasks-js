import readline from 'readline';
// const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pairs = [];

const canTransform = (string1, string2) => {
    //если строки разной длины, дальше можно не сравнивать и сразу вернуть NO
    if (string1.length !== string2.length) return 'NO';

    // Объект, где будут храниться пары символов
    const transformations = {};

    // Цикл для посимвольного прохождения по строкам
    for (let index = 0; index < string1.length; index++) {
        const currentChar1 = string1[index]; // текущий символ из первой строки
        const currentChar2 = string2[index]; // текущий символ из второй строки

        //Если у символа из первой строки еще нет пары, добавляем пару
        if (!transformations[currentChar1]) transformations[currentChar1] = currentChar2;

        //Если у символа из второй строки еще нет пары, добавляем ему пару
        if (!transformations[currentChar2]) transformations[currentChar2] = currentChar1;

        //Является ли пара взаимной
        if (transformations[currentChar1] !== currentChar2 || transformations[currentChar2] !== currentChar1) return 'NO';
    }

    return 'YES';
}

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
