console.log('test')
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;  // get the input
     process.stdin.pause();
});
process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    console.log('test2')
    const MOD = 998244353;
    const n = parseInt(input.trim(), 10);

    // Количество способов выбрать 3 буквы "M", "T", "S" из n
    // Это можно сделать с помощью сочетаний C(n, 3)
    // C(n, k) = n! / (k! * (n-k)!)
    function factorial(x) {
        let result = 1;
        for (let i = 2; i <= x; i++) {
            result = (result * i) % MOD;
        }
        return result;
    }

    function modInverse(a, mod) {
        // Функция для вычисления обратного элемента a по модулю mod
        let m0 = mod, y = 0, x = 1;
        if (mod === 1) return 0;
        while (a > 1) {
            let q = Math.floor(a / mod);
            let t = mod;

            mod = a % mod;
            a = t;
            t = y;

            y = x - q * y;
            x = t;
        }
        if (x < 0) x += m0;
        return x;
    }

    // Число способов выбрать "M", "T", "S"
    let waysToChooseMTS = (n >= 3) ? (factorial(n) * modInverse(factorial(3), MOD) % MOD * modInverse(factorial(n - 3), MOD) % MOD) : 0;

    // Общее количество возможных строк длины n
    let totalStrings = Math.pow(26, n) % MOD;

    // Вероятность в виде дроби p/q
    let p = waysToChooseMTS;
    let q = totalStrings;

    // Чтобы получить p * q^-1 по модулю MOD
    let result = (p * modInverse(q, MOD)) % MOD;

    process.stdout.write(result.toString() + "\n"); // выводим результат
   
}
