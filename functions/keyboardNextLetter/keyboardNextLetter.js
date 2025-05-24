const keyboardNextLetter = (letter) => {
    const top = 'qwertyuiop';
    const middle = 'asdfghjkl';
    const bottom = 'zxcvbnm';

    let row;
    let index;

    if (top.includes(letter)) row = top;
        else if (middle.includes(letter)) row = middle;
            else if (bottom.includes(letter)) row = bottom;
    
    for (let i = 0; i < row.length; i++) {
        
        if (row[i] == letter) return row[(i + 1) % row.length];       
    };
};

console.log(keyboardNextLetter('q')); //w
console.log(keyboardNextLetter('p')); //q
console.log(keyboardNextLetter('l')); //a
console.log(keyboardNextLetter('m')); //z