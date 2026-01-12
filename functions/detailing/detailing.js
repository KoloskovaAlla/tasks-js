function solve(numbers) {
    let positiveCount = 0;
    let negativeCount = 0;
    
    for (let num of numbers) {
        if (num > 0) positiveCount++;
        else negativeCount++;
    }
    
    console.log(`Положительных: ${positiveCount}, Отрицательных: ${negativeCount}`);
    
    if (positiveCount !== negativeCount) {
        return -1;
    }
    
    let starts = [];
    let ends = [];
    
    for (let num of numbers) {
        if (num > 0) starts.push(num);
        else ends.push(-num);
    }
    
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    
    console.log(`Начала: ${starts}`);
    console.log(`Концы: ${ends}`);
    
    let totalTime = 0;
    
    for (let i = 0; i < starts.length; i++) {
        let start = starts[i];
        let end = ends[i];
        
        if (end < start) {
            return -1;
        }
        
        console.log(`Пара ${i+1}: ${start} -> ${end} = ${end - start}`);
        totalTime += (end - start);
    }
    
    return totalTime;
}

// Тестируем напрямую
const numbers = [11, 4, -6, 8, -9, -16];
console.log("Тест 1:", solve([123, -456]));        // Ожидаем: 333
console.log("Тест 2:", solve([111, -111]));        // Ожидаем: 0
console.log("Тест 3:", solve([1, 2, -1]));         // Ожидаем: -1 (3 числа: 2 положительных, 1 отрицательное)
console.log("Тест 4:", solve([1, -2, 2, -1]));     // Ожидаем: 1 (пары: 1→1=0, 2→2=0, всего 0)

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;
});
process.stdin.on("end", function () {
   main(stdin_input);
});

function solve(numbers) {
    let positiveCount = 0;
    let negativeCount = 0;
    
    for (let num of numbers) {
        if (num > 0) positiveCount++;
        else negativeCount++;
    }
    
    // Должно быть поровну начал и концов
    if (positiveCount !== negativeCount) {
        return -1;
    }
    
    let starts = [];
    let ends = [];
    
    for (let num of numbers) {
        if (num > 0) starts.push(num);
        else ends.push(-num);
    }
    
    // Сортируем
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    
    let totalTime = 0;
    
    for (let i = 0; i < starts.length; i++) {
        let start = starts[i];
        let end = ends[i];
        
        // Конец не может быть раньше начала
        if (end < start) {
            return -1;
        }
        
        totalTime += (end - start);
    }
    
    return totalTime;
}

function main(input) {
    const lines = input.trim().split('\n');
    
    // Первая строка - количество тестовых примеров
    const t = parseInt(lines[0]);
    
    let result = [];
    let lineIdx = 1;
    
    // Обработаем каждый тестовый пример
    for (let i = 0; i < t; i++) {
        // Первая строка примера: количество записей
        const n = parseInt(lines[lineIdx]);
        
        // Вторая строка примера: сами числа
        const numbers = lines[lineIdx + 1]
            .split(' ')
            .map(x => parseInt(x));
        
        // Решаем этот пример
        result.push(solve(numbers));
        
        // Переходим к следующему примеру
        lineIdx += 2;
    }
    
    // Выводим результаты
    process.stdout.write(result.join('\n') + '\n');
}


