const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', (input) => {
  // Собираем все непустые строки во внутренний буфер
  const trimmed = input.trim();
  if (trimmed) {
    lines.push(trimmed);
  }
});

rl.on('close', () => {
  if (lines.length === 0) return;

  // 1. Парсим все числа из всех строк в один массив BigInt'ов
  // Это надежнее, чем считать, что ввод всегда ровно в двух строках
  const tokens = lines.join(' ').trim().split(/\s+/);
  
  if (tokens.length < 2) return;

  let tokenIdx = 0;
  const M = BigInt(tokens[tokenIdx++]); // Количество снаряжения
  const N = Number(tokens[tokenIdx++]); // Количество групп (можно Number, оно небольшое)

  const W = [];
  for (let i = 0; i < N; i++) {
    W.push(BigInt(tokens[tokenIdx++]));
  }

  // 2. Основная логика решения
  
  // Сортируем потребности по возрастанию. 
  // Важно: для BigInt нужна явная функция сравнения
  W.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  // Считаем общую потребность
  let totalDemand = 0n;
  for (const w of W) {
    totalDemand += w;
  }

  // Общий дефицит (сколько не хватает)
  let deficit = totalDemand - M;

  // Если снаряжения хватает с избытком (по условию задачи этого не должно быть, но для защиты)
  if (deficit <= 0n) {
    console.log(0);
    return;
  }

  let minProblemSum = 0n;
  const MOD = 1000000007n;

  // Проходим по группам от самых "скромных" к требовательным
  for (let i = 0; i < N; i++) {
    // Количество оставшихся групп, на которые нужно распределить дефицит
    const remainingGroups = BigInt(N - i);
    
    // "Справедливая" доля дефицита на одну группу
    const fairShare = deficit / remainingGroups; // BigInt делит нацело (floor)

    // Если текущая группа просит МЕНЬШЕ (или столько же), чем средняя нехватка
    if (W[i] <= fairShare) {
      // Эта группа не может взять на себя среднюю нехватку (уйдет в минус),
      // поэтому она берет свою максимальную нехватку (всю свою потребность)
      // То есть ей не достается ничего.
      minProblemSum += W[i] * W[i];
      deficit -= W[i];
    } else {
      // Если текущая группа большая, то она и ВСЕ последующие (так как массив отсортирован)
      // могут принять "справедливую" долю дефицита.
      // Мы можем разом распределить остаток дефицита и выйти из цикла.
      
      const base = deficit / remainingGroups;
      const remainder = deficit % remainingGroups;

      // 'remainder' групп получат штраф (base + 1)
      // остальные (remainingGroups - remainder) получат штраф base
      
      const countWithMore = remainder;
      const countWithBase = remainingGroups - remainder;

      minProblemSum += countWithBase * (base * base);
      minProblemSum += countWithMore * ((base + 1n) * (base + 1n));
      
      // Весь дефицит распределен
      break;
    }
  }

  // Вывод по модулю
  console.log((minProblemSum % MOD).toString());
});
