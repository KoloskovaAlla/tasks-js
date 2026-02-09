const maxProduct = (array) => {     
    array.sort((a, b) => b - a);
    return array[0] * array[1];
};

console.log(maxProduct([2, 1, 5, 0, 4, 3]));