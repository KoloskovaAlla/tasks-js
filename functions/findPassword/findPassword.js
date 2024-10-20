const readline = require('readline');

const restoreSet = (inputString, requiredChars, maxLength) => {
    const requiredSet = new Set(requiredChars);
    const requiredCount = requiredSet.size;
    const charCounts = {};
    let left = 0, right = 0, foundCount = 0;
    let bestResult = '';

    while (right < inputString.length) {
        // Обрабатываем правую границу окна
        if (requiredSet.has(inputString[right])) {
            charCounts[inputString[right]] = (charCounts[inputString[right]] || 0) + 1;
            if (charCounts[inputString[right]] === 1) {
                foundCount++;
            }
        }

        // Проверяем, покрытия ли мы все необходимые символы
        while (foundCount === requiredCount) {
            const currentLength = right - left + 1;

            if (currentLength <= maxLength) {
                const candidate = inputString.slice(left, right + 1);
                
                // Проверка на выбор самого длинного и с правой позиции
                if (
                    candidate.length > bestResult.length || 
                    (candidate.length === bestResult.length && left > inputString.indexOf(bestResult))
                ) {
                    bestResult = candidate;
                }
            }

            // Обрабатываем левую границу окна
            if (requiredSet.has(inputString[left])) {
                charCounts[inputString[left]]--;
                if (charCounts[inputString[left]] === 0) {
                    foundCount--;
                }
            }
            left++;
        }
        right++;
    }

    return bestResult.length > 0 ? bestResult : '-1';
};

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputString = '';
let requiredChars = '';
let maxLength = 0;
let lineCount = 0;

reader.on('line', (line) => {
    if (lineCount === 0) {
        inputString = line;
    } else if (lineCount === 1) {
        requiredChars = line;
    } else if (lineCount === 2) {
        maxLength = parseInt(line);
        const result = restoreSet(inputString, requiredChars, maxLength);
        console.log(result);
        reader.close();
    }
    lineCount++;
});
