const paintLetterboxes = (start, end) => {
    let currentString = '';
    let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let currentNumber = start; currentNumber < (end + 1); currentNumber++) {
        currentString = currentNumber.toString();
        for (let char of currentString) {
            const index = Number(char);
            counts[index] ++;
        };
    };
    return counts;
};

console.log(paintLetterboxes(125, 132));
// (125, 132), [1,9,6,3,0,1,1,1,1,1]);