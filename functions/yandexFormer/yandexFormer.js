/**
* @param {number} N - целое число, количество сотрудников готовых к объединению
* @param {number[]} staff - массив длины N с грейдами доступных сотрудников
* @param {number} K - целое число, количество доступных клавиатур
* @returns {number}
*/
function yandexFormer(N, staff, K) {
  // Ваш код
  let x = 0;
  staff.sort((a, b) => b - a);
  for (let i = 0; i < K; i++) {
    x += staff[i]
  }
  console.log(x);
  return x // x - максимальный уровень Яндексформера
};

module.exports = yandexFormer(15, [19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4], 1);

