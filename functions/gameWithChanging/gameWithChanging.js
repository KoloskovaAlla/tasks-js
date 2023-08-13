import readline from 'readline';
// const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pairs = [];
const canTransform = (string1, string2) => {
    if (string1.length !== string2.length) {
        return 'NO';
    }

    const transformations = new Map();

    for (let index = 0; index < string1.length; index++) {
        if (!transformations.has(string1[index])) transformations.set(string1[index],  string2[index]);            
        else 
            if (transformations.get(string1[index]) !==  string2[index]) return 'NO';         

        if (!transformations.has(string2[index])) transformations.set(string2[index], string1[index]);
        else 
            if (transformations.get(string2[index]) !== string1[index]) return 'NO';
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
            pairs.map((pair) => console.log(canTransform(pair[0], pair[1])));
            reader.close();
        }
    }
});
