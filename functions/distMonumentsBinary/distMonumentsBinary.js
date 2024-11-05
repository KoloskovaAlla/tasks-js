const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, r] = input[0].split(" ").map(Number);
  const distances = input[1].split(" ").map(Number);

  let count = 0;

  for (let i = 0; i < n; i++) {
    console.log(`считаем от памятника ${i}`)
    // Бинарный поиск
    let left = i + 1, right = n - 1, res = n;
    while (left <= right) {
      console.log(`левый памятник ${left}`);
      console.log(`правый памятник ${right}`);
      const mid = Math.floor((left + right) / 2);
      console.log(`памятник по середине между левым и правым ${mid}`);
      console.log(`расстояние до срединного памятника ${distances[mid]}`);
      console.log(`расстояние до того памятника, от которого мы сейчас считаем ${distances[i] }`)
      console.log(`расстояние между памятниками равно ${distances[mid] - distances[i]}, а нам надо больше ${r}`)
      if (distances[mid] - distances[i] > r) {
        console.log(`расстояние нас устраивает, поэтому res становится равным ${mid}, а правый становится равным ${mid-1}`)
        res = mid;
        right = mid - 1;
      } else {
        console.log(`расстояние нас не устраивает, поэтому левый становится равным ${mid+1}`)
        left = mid + 1;
      }
      console.log(`------------------`);
    }
    // Количество подходящих пар
    count += n - res;
  }
  
  console.log(count);
});