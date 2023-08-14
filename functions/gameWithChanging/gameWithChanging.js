import readline from 'readline';
// const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pairs = [];

const checkStrs = (str1, str2) => {
    const areLengthsEqual = str1.length === str2.length;
    const isStr1Latin = /^[a-zA-Z]+$/.test(string1);
    const isStr2Latin = /^[a-zA-Z]+$/.test(string2);
    return areLengthsEqual && isStr1Latin && isStr2Latin;
};

const canTransform = (str1, str2) => {
    const swap = {};

    if (!checkStrs(str1, str2)) return 'NO';

    const str1Chars = str1.split('');

    str1Chars.forEach((str1Char, index) => {
        const str2Char = str2[index];

        if (!swap[str1Char]) swap[str1Char] = char2;
        if (!swap[str2Char]) swap[str2Char] = str1Char;

        const isNonUnique = (char1, char2) => {
            return swap[char1] !== char2;
        };

        if (isNonUnique(str1Char, str2Char) || isNonUnique(str2Char, str1Char)) return 'NO';
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
