import readline from 'readline';
// const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pairs = [];

// const canTransform = (string1, string2) => {
//     //если строки разной длины, дальше можно не сравнивать и сразу вернуть NO
//     if (string1.length !== string2.length || !/^[a-zA-Z]+$/.test(string1)) return 'NO';

//     // Объект, где будут храниться пары символов
//     const swap = {};

//     // Цикл для посимвольного прохождения по строкам
//     for (let index = 0; index < string1.length; index++) {
//         const currentChar1 = string1[index]; // текущий символ из первой строки
//         const currentChar2 = string2[index]; // текущий символ из второй строки

//         //Если у символа из первой строки еще нет пары, добавляем пару
//         if (!transformations[currentChar1]) transformations[currentChar1] = currentChar2;

//         //Если у символа из второй строки еще нет пары, добавляем ему пару
//         if (!transformations[currentChar2]) transformations[currentChar2] = currentChar1;

//         //Является ли пара взаимной
//         if (transformations[currentChar1] !== currentChar2 || transformations[currentChar2] !== currentChar1) return 'NO';
//     };   

//     return 'YES';
// };
    // const canTransform = (string1, string2) => {
    //     const swap = {};

    //     if (string1.length !== string2.length || 
    //         !/^[a-zA-Z]+$/.test(string1) || 
    //         !/^[a-zA-Z]+$/.test(string2)
    //     ) return 'NO';
        
    //     const result = string1.split('').map((currentChar1, index) => {
    //         const currentChar2 = string2[index];

    //         if (!transformations[currentChar1]) transformations[currentChar1] = currentChar2;
    //         if (!transformations[currentChar2]) transformations[currentChar2] = currentChar1;

    //         return transformations[currentChar1] === currentChar2 && transformations[currentChar2] === currentChar1;
    //     });
        
    //     return result.every(value => value) ? 'YES' : 'NO';
    // };

    const checkStrings = (string1, string2) => {
        if (string1.length === string2.length && 
            /^[a-zA-Z]+$/.test(string1) &&
            /^[a-zA-Z]+$/.test(string2)) 
        return true;     
    };

    const canTransform = (string1, string2) => {
        const swap = {};

        if  (!checkStrings(string1, string2)) return 'NO';

        const  chars1 = string1.split('');
        chars1.forEach((char1, index) => {
            const char2 = string2[index];

            if (!swap[char1]) swap[char1] = char2;
            if (!swap[char2]) swap[char2] = char1;

            if (swap[char1] !== char2 || swap[char2] !== char1) return 'NO';
        });

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
