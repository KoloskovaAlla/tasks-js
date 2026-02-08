const multiples = (m, n) => {
    let arr = [];
    for (let i = 0; i < m; i++) {
        const current = (i + 1) * n;
        arr.push(current)
    }
    return arr;
};

console.log(multiples(3, 5.0))