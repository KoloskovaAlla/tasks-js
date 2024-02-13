

// const readline = require('readline');
import readline from 'readline';

const isFormTinkoffWord = (letters) => {
    const targetWord = 'TINKOFF';
    const letterCount = {};
   
    for (let letter of letters) {
        letter = letter.toUpperCase();
        if (letterCount[letter]) {
            letterCount[letter]++;
        } else {
            letterCount[letter] = 1;
        };
    };
    
    for (let letter of targetWord) {
        letter = letter.toUpperCase();
        if (!letterCount[letter] || letterCount[letter] === 0) {
            return 'No';
        } else {
            letterCount[letter]--;
        };
    };
    
    for (let letter in letterCount) {
        if (letterCount[letter] !== 0) {
            return 'No';
        }
    }

    return 'Yes';
};

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;
let giftsPrices = [];

reader.on('line', (line) => {
    inputLines.push(line);
    
    if (inputLines.length > 0 && inputLines.length === parseInt(inputLines[0]) + 1) {
        const testCases = inputLines.slice(1);
        const results = testCases.map(isFormTinkoffWord);
        console.log(results.join('\n'));
        reader.close();
    }
});
