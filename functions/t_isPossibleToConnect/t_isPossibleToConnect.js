// const readline = require('readline');
import readline from 'readline';

// Функция для определения возможности установки связи между разработчиками
function isPossibleToConnect(n, thresholds) {
    // Проверяем, если хотя бы у одного разработчика порог социальности больше или равен (n - 1)
    if (thresholds.some(threshold => threshold >= n - 1)) {
        return 'Yes';
    }

    // Проверяем каждого разработчика
    for (let i = 0; i < n; i++) {
        // Если у разработчика порог социальности равен 0
        if (thresholds[i] === 0) {
            // Проверяем, есть ли другие разработчики с ненулевым порогом социальности, 
            // которые могли бы установить контакт с ним
            if (!thresholds.some((threshold, j) => j !== i && threshold > 0)) {
                return 'No';
            }
        }
    }

    // Если не выполнилось ни одно из условий, возвращаем "Yes"
    return 'Yes';
}

// Создаем интерфейс для ввода и вывода данных
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let testCaseCount = 0;
let currentTestCase = 0;
let n = 0;
let thresholds = [];

// Список для хранения ответов
let answers = [];

// Обработчик события "line" для чтения ввода
reader.on('line', (line) => {
    // Проверяем, если количество тестов еще не было установлено
    if (!testCaseCount) {
        testCaseCount = parseInt(line); // Читаем количество тестов
    } else if (!n) {
        n = parseInt(line); // Читаем количество разработчиков
    } else if (thresholds.length < n) {
        // Читаем пороги социальности каждого разработчика
        thresholds.push(...line.split(' ').map(Number));
    }

    // Если количество разработчиков и пороги социальности всех разработчиков были прочитаны
    if (n && thresholds.length === n) {
        // Определяем возможность установки связи между разработчиками
        const result = isPossibleToConnect(n, thresholds);
        // Добавляем результат в список ответов
        answers.push(result);

        // Увеличиваем номер текущего теста и сбрасываем значения для следующего теста
        currentTestCase++;
        n = 0;
        thresholds = [];

        // Если все тесты были обработаны
        if (currentTestCase === testCaseCount) {
            // Выводим ответы
            answers.forEach(answer => console.log(answer));
            // Закрываем интерфейс ввода/вывода
            reader.close();
        }
    }
});