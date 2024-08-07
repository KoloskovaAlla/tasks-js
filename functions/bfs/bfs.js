function bfs(graph, start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
        const currentVertex = queue.shift();
        result.push(currentVertex);

        graph[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }

    return result;
}

// Пример использования:
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B', 'E', 'F'],
    'E': ['C', 'D', 'F'],
    'F': ['D', 'E']
};

console.log(bfs(graph, 'A')); // Вывод: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
