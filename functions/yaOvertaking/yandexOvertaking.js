const countOvertakes = (n, t, s, speeds) => {
  const cars = [];
  for (let i = 0; i < n; i++) {
    cars.push({ index: i, speed: speeds[i] });
  }

  console.log(cars);

  let rounds = [];

  for (let i = 0; i < n; i++) {
    let currentCarDistance = cars[i].speed * t;
    let currentCarRound = currentCarDistance / s;
    let currentCarFullRound = Math.floor(currentCarRound);
    console.log(currentCarFullRound);
    rounds.push(currentCarFullRound);
  };

  console.log(rounds);

  let overtaking = 0;

  for (let i = 1; i < n; i++) {
    if (rounds[0] > rounds[i]) overtaking = overtaking + rounds[0] - rounds[i] - 1;
    console.log(overtaking);
  };

};

// countOvertakes(5, 10, 10, [10, 2, 3, 4, 5]);
// countOvertakes(10, 10, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
countOvertakes(2, 1, 1, [1000000, 1]);
// Пример использования
// const example1 = countOvertakes(5, 10, 10, [10, 2, 3, 4, 5]);
// console.log(example1); // Ожидаемый результат: 22

// const example2 = countOvertakes(10, 10, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(example2); // Ожидаемый результат: 0

// const example3 = countOvertakes(2, 1, 1, [1000000, 1]);
// console.log(example3); // Ожидаемый результат: 999998