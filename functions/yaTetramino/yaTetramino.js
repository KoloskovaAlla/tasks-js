let count = 0;

const board = [
  '........',
  '........',
  '........',
  '........',
  '........',
  '........',
  '........',
  '........'
];


//вариант, когда тетрамино, как буква Т
const canBeTetramino1 = (board, i, j) => {
  const canBeTetramino =
    board[i][j] === '.' &&
    board[i][j + 1] === '.' &&
    board[i][j + 2] === '.' &&
    board[i + 1][j + 1] === '.';
  return canBeTetramino;
};

//вариант, когда тетрамино, как буква Т повернута по часовой стрелке на 90 градусов
const canBeTetramino2 = (board, i, j) => {
  const canBeTetramino =
    board[i][j] === '.' &&
    board[i + 1][j - 1] === '.' &&
    board[i + 1][j] === '.' &&
    board[i + 2][j] === '.';
  return canBeTetramino;
};

// Это цикл изменения строк и колонок, когда тетрамино буквой T
for (let row = 0; row < 7; row++) {
  for (let column = 0; column < 6; column++) {
    if (canBeTetramino1(board, row, column)) count++;
  };
};

// Это цикл изменения строк и колонок, когда тетрамино буквой T
for (let row = 1; row < 8; row++) {
  for (let column = 0; column < 6; column++) {
    if (canBeTetramino2(board, row, column)) count++;
  };
};

console.log(count);
