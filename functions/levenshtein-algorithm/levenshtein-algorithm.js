const levenshteinDistance = (firstString, secondString) => {

    const firstStringLength = firstString.length;
    const secondStringLength = secondString.length;

    // создаем числовую матрицу  
    const distanceMatrix = Array(firstStringLength + 1).fill().map(() => 
        Array(secondStringLength + 1).fill(0)
    ); 
    
    // Инициализируем первую строку   
    for (let j = 0; j < secondStringLength + 1; j++) {
        distanceMatrix[0][j] = j;
    }

    // Инициализируем первый столбец
    for (let i = 0; i < firstStringLength + 1; i++) {
        distanceMatrix[i][0] = i;
    };

    // console.table(distanceMatrix);    

    for (let i = 1; i < firstString.length + 1; i++) {
        for (let j = 1; j < secondString.length + 1; j++) {
            const deleteLetter = distanceMatrix[i][j - 1];
            const add = distanceMatrix[i - 1][j];
            const replace = distanceMatrix[i - 1][j - 1];
            // проверяем одинаковы ли буквы, которые мы сравниваем: firstString[j] и seconString[i]
            // console.log(`из слова ${firstString} берем  ${firstString[i - 1]}`);
            // console.log(`из слова ${secondString} берем ${secondString[j - 1]}`);
            const areTheSameLetters = firstString[i - 1] === secondString[j - 1];
            if (areTheSameLetters) {
                distanceMatrix[i][j] = replace;
            }
                else distanceMatrix[i][j] = Math.min(deleteLetter + 1, add + 1, replace + 1);
                
        };
    };

    // console.table(distanceMatrix);   

    return distanceMatrix[firstStringLength][secondStringLength];
};

console.log(levenshteinDistance('алла', 'анна'));
