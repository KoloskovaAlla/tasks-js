import readline from 'readline';
// const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pairs = [];

const canTransform = (s1, s2) => {
    if (s1.length !== s2.length) {
        return "NO";
    }

    const transformations = new Map();

    for (let i = 0; i < s1.length; i++) {
        if (!transformations.has(s1[i])) {
            transformations.set(s1[i], s2[i]);
        } else if (transformations.get(s1[i]) !== s2[i]) {
            return "NO"; // Если замена не соответствует правилам, возвращаем "NO"
        }

        if (!transformations.has(s2[i])) {
            transformations.set(s2[i], s1[i]);
        } else if (transformations.get(s2[i]) !== s1[i]) {
            return "NO"; // Если замена не соответствует правилам, возвращаем "NO"
        }
    }

    return "YES"; // Если все замены прошли успешно, возвращаем "YES"
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
            const result = pairs.map(pair => canTransform(pair[0], pair[1]));
            result.forEach(res => console.log(res));
            reader.close();
        }
    }
});