let count = 0;

const board = [
  '....****',
  '....****',
  '....****',
  '....****',
  '****....',
  '****....',
  '****....',
  '****....'
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

//вариант, когда тетрамино, как буква Т повернута по часовой стрелке на 180 градусов
const canBeTetramino3 = (board, i, j) => {
  const canBeTetramino =
    board[i][j] === '.' &&
    board[i + 1][j - 1] === '.' &&
    board[i + 1][j] === '.' &&
    board[i + 1][j + 1] === '.';
  return canBeTetramino;
};

//вариант, когда тетрамино, как буква Т повернута по часовой стрелке на 270 градусов
const canBeTetramino4 = (board, i, j) => {
  const canBeTetramino =
    board[i][j] === '.' &&
    board[i + 1][j] === '.' &&
    board[i + 1][j + 1] === '.' &&
    board[i + 2][j] === '.';
  return canBeTetramino;
};

// Это цикл изменения строк и колонок, когда тетрамино буквой T
for (let row = 0; row < 7; row++) {
  for (let column = 0; column < 6; column++) {
    if (canBeTetramino1(board, row, column)) count++;
  };
};

// Это цикл изменения строк и колонок, когда Т повернута по часовой стрелке на 90 градусов
for (let row = 0; row < 6; row++) {
  for (let column = 1; column < 8; column++) {
    if (canBeTetramino2(board, row, column)) count++;
  };
};

// Это цикл изменения строк и колонок, когда Т повернута по часовой стрелке на 180 градусов
for (let row = 0; row < 7; row++) {
  for (let column = 0; column < 7; column++) {
    if (canBeTetramino3(board, row, column)) count++;
  };
};

// Это цикл изменения строк и колонок, когда Т повернута по часовой стрелке на 270 градусов
for (let row = 0; row < 6; row++) {
  for (let column = 0; column < 7; column++) {
    if (canBeTetramino4(board, row, column)) count++;
  };
};


console.log(count);
