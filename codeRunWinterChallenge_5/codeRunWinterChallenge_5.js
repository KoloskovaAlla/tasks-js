const route = (n, points) => {
    let edges = []
    const addEdges = (coordinate) => {        
        points.sort((a, b) => a[coordinate] - b[coordinate]); 
        for (let i = 0; i < points.length - 1; i++) {
            const dif = Math.abs(points[i][coordinate] - points[i+1][coordinate])
            edges.push( { u: points[i].id, v: points[i+1].id, w: dif })
        }
    }

    addEdges('x');
    addEdges('y');
    addEdges('z');  

    edges.sort((a, b) => a.w - b.w);

    const parent = new Int32Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;


    const find = (i) => {
        if (parent[i] === i) return i;
        
        // Рекурсивно ищем босса и сразу запоминаем его (сжатие пути)
        parent[i] = find(parent[i]); 
        return parent[i];
    };

    const union = (i, j) => {
        const rootI = find(i);
        const rootJ = find(j);

        if (rootI !== rootJ) {
            parent[rootI] = rootJ; // Теперь i подчиняется j (вернее их корни)
            return true; // Объединение произошло успешно
        }
        return false; // Они и так были вместе
    };

    let minCost = 0;
    let edgesCount = 0;

    for (const edge of edges) {
        // Пытаемся соединить точки u и v
        if (union(edge.u, edge.v)) {
            minCost += edge.w; // Если соединили — добавляем цену
            edgesCount++;
            
            // Оптимизация: если уже набрали N-1 ребер, дерево построено
            if (edgesCount === n - 1) break; 
        }
    }

    return minCost;
}