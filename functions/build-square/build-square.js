const generateShape = (integer) => {
    let result = '';
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            result += '+';
        }
        if (i < integer - 1) result += '\n';
    }
    return result;
}

console.log(generateShape(3))