function sortList(sortBy, list) {
    const copy = [...list]
    copy.sort((a, b) => b[sortBy] - a[sortBy]);
    return copy;
}

console.log(sortList('a', [
    { a: 4, b: 3 },
    { a: 1, b: 40 },
    { a: 2, b: 2 },
    { a: 1, b: 12 },
    { a: 0, b: 12 }
],))