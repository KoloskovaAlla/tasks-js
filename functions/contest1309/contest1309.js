const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const n = parseInt(lines[0]);
    const array = lines.slice(1).map((line) => parseInt(line));

    let maxStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < n; i++) {
        if (array[i] === 1) {
            currentStreak++;
            if (currentStreak > maxStreak) {
                maxStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
    }

    process.stdout.write(maxStreak.toString());
});