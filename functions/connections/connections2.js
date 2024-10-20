process.stdin.resume();
process.stdin.setEncoding("utf-8");

let stdin_input = "";
let lines = [];
let n = 0;

process.stdin.on("data", function (input) {
    stdin_input += input;
    lines = stdin_input.trim().split("\n");

    // Определяем количество базовых станций из первой строки
    if (n === 0 && lines.length > 0) {
        n = parseInt(lines[0], 10);
    }

    // Если количество строк равно n + 1 (плюс первая строка с количеством базовых станций), завершаем ввод
    if (lines.length === n + 1) {
        process.stdin.emit("end");
    }
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    const lines = input.trim().split("\n"); // Разделяем ввод по строкам
    const n = parseInt(lines[0]); // Количество базовых станций
    const a = lines.slice(1).map(BigInt); // Список соединений для каждой базовой станции, используем BigInt

    // Инициализация переменной для хранения минимального количества соединений типа 2
    let min_type_2_connections = BigInt(0); // Начальное значение для поиска минимума

    // Для первой базовой станции устанавливаем начальное значение
    min_type_2_connections = a[0] / BigInt(2); 

    // Для каждой базовой станции находим минимальное количество соединений типа 2
    for (let i = 1; i < n; i++) {
        const type_2_connections = a[i] / BigInt(2); // Используем BigInt для деления
        min_type_2_connections = min_type_2_connections < type_2_connections ? min_type_2_connections : type_2_connections;
    }

    // Выводим результат, конвертируем обратно в строку
    console.log(min_type_2_connections.toString());
    process.exit();
}
