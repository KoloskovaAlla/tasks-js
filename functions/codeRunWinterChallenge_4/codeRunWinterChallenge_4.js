const readline = require('readline');

// --- НАЧАЛО ПРЕДПОДСЧЕТА ---
// Генерируем артефакты (Highly Composite Numbers) один раз при запуске.

// Первые простые числа. Произведение первых 16 простых чисел уже > 10^18.
const primes = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n, 47n, 53n];
const LIMIT = 1000000000000000000n; // 10^18

let candidates = [];

// Рекурсивная генерация чисел вида 2^a * 3^b * 5^c ... где a >= b >= c ...
function generate(pIdx, currentVal, currentDivs, lastExp) {
    // Сохраняем кандидата
    candidates.push({ val: currentVal, divs: currentDivs });
    
    if (pIdx >= primes.length) return;

    let p = primes[pIdx];
    let nextVal = currentVal;
    
    // Перебираем степень текущего простого числа (от 1 до lastExp)
    for (let e = 1; e <= lastExp; e++) {
        if (LIMIT / p < nextVal) break; // Проверка на переполнение/выход за границу
        nextVal *= p;
        // Рекурсивный вызов для следующего простого числа
        // Новая максимальная степень передается как e, чтобы поддерживать невозрастание степеней
        generate(pIdx + 1, nextVal, currentDivs * (e + 1), e);
    }
}

// Запускаем генерацию
generate(0, 1n, 1, 60); // 60, т.к. 2^60 > 10^18

// Сортируем кандидатов по возрастанию значения числа
candidates.sort((a, b) => {
    if (a.val < b.val) return -1;
    if (a.val > b.val) return 1;
    return 0;
});

// Отбираем настоящие артефакты: делителей должно быть строго больше, чем у любого меньшего числа
const artifacts = [];
let maxDivs = 0;
for (const c of candidates) {
    if (c.divs > maxDivs) {
        maxDivs = c.divs;
        artifacts.push(c.val);
    }
}

// Функция для подсчета артефактов на отрезке [1, x] с помощью бинарного поиска
function countLeq(x) {
    let l = 0, r = artifacts.length - 1;
    let ans = -1;
    while (l <= r) {
        const mid = (l + r) >>> 1;
        if (artifacts[mid] <= x) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans + 1;
}
// --- КОНЕЦ ПРЕДПОДСЧЕТА ---


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let isFirstLine = true;

rl.on('line', (input) => {
    const line = input.trim();
    if (!line) return;

    // Первую строку с числом Q пропускаем, так как обрабатываем поток построчно
    if (isFirstLine) {
        isFirstLine = false;
        return;
    }

    const parts = line.split(/\s+/);
    if (parts.length >= 2) {
        // Используем BigInt для точности 64-битных чисел
        const l = BigInt(parts[0]);
        const r = BigInt(parts[1]);
        
        // Ответ = кол-во(<= r) - кол-во(<= l-1)
        const ans = countLeq(r) - countLeq(l - 1n);
        process.stdout.write(ans + '\n');
    }
});
