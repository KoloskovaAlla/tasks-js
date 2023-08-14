import readline from 'readline';
// const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pairs = [];
// if (str1.length !== str2.length || !/^[a-zA-Z]+$/.test(str1)) return 'NO';

const canTransform = (str1, str2) => {
    const swap = {};

    const hasMismatch = (char1, char2) => {
        return swap[char1] !== char2;
    };
    let hasNonMutualPair;
   
    const str1Chars = str1.split('');

    str1Chars.forEach((str1Char, index) => {
        const str2Char = str2[index];

        if (!swap[str1Char]) swap[str1Char] = str2Char;
        if (!swap[str2Char]) swap[str2Char] = str1Char; 

        const hasMismatchFromStr1 =  hasMismatch(str1Char, str2Char); 
        const hasMismatchFromStr2 =  hasMismatch(str2Char, str1Char);    
        hasNonMutualPair = hasMismatchFromStr1 || hasMismatchFromStr2;       
    });
    if (hasNonMutualPair) return 'NO';
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
