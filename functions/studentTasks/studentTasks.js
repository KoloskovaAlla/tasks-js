const fs = require('fs');

function topologicalSort(graph, inDegree) {
    let result = [];
    let zeroInDegree = [];

    for (let i = 1; i < graph.length; i++) {
        if (inDegree[i] === 0) {
            zeroInDegree.push(i);
        }
    }

    while (zeroInDegree.length > 0) {
        let node = zeroInDegree.shift();
        result.push(node);

        for (let neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                zeroInDegree.push(neighbor);
            }
        }
    }

    if (result.length !== graph.length - 1) {
        return [0];
    }

    return result;
}

// Чтение из файла
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Обработка данных из файла
  const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');
  const n = Number(lines[0]);
  const requirements = lines[1].split(' ').map(Number);
  const result = 

  // Запись результата в файл
  fs.writeFile('output.txt', result.toString(), (err) => {
    if (err) {
      console.error(err);
      return;
    }   
  });
});