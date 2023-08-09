import readline from 'readline';
// const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  arr.push(line.trim()); // Добавляем каждую отдельную строку в массив arr
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
            return "NO";
        }

        if (!transformations.has(s2[i])) {
            transformations.set(s2[i], s1[i]);
        } else if (transformations.get(s2[i]) !== s1[i]) {
            return "NO";
        }
    }

    return "YES";
}

rl.on('line', (line) => {
    pairs.push(line.trim());

    if (pairs.length === 2) {
        const result = canTransform(pairs[0], pairs[1]);
        console.log(result);
        pairs.length = 0; // Очищаем массив для следующей пары строк
    }
});