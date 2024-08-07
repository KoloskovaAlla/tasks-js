function bfsMaze(maze, start, end) {
  const rows = maze.length;
  const cols = maze[0].length;
  const directions = [
    [0, 1],   // вправо
    [1, 0],   // вниз
    [0, -1],  // влево
    [-1, 0]   // вверх
  ];

  const queue = [[start]];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      return path;
    }

    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === 0 && !visited[newX][newY]) {
        visited[newX][newY] = true;
        queue.push([...path, [newX, newY]]);
      }
    }
  }

  return "Путь не найден";
}

// Пример использования:
const maze = [
  [0, 0, 1, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0]
];

const start = [0, 0];
const end = [3, 3];

const shortestPath = bfsMaze(maze, start, end);
console.log(shortestPath);