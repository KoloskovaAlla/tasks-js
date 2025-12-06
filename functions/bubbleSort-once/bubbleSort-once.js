const bubblesortOnce = (array) => {
    let intermediate;
    let newArray = [...array];
    for (let i = 0; i < array.length - 1; i++) {
        if (newArray[i + 1] < newArray[i]) {
            intermediate = newArray[i];
            newArray[i] = newArray[i + 1];
            newArray[i + 1] = intermediate;
        } 
    }
    return newArray;
};

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])); //[7, 5, 3, 1, 2, 4, 6, 8, 9]