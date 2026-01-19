// const sortNumbers = (arrays) => {
//     if (arrays === null || arrays.length === 0) return [];
    
//     for (let i = 0; i < arrays.length - 1; i++) {
//         for (let j = i + 1; j < arrays.length; j++) 
//             if (arrays[i] > arrays[j]) {
//                 let middle = arrays[i]
//                 arrays[i] = arrays[j];
//                 arrays[j] = middle
//             }        
//     }
//     return arrays;
// }

const sortNumbers = (arrays) => {
    if (arrays === null || arrays.length === 0) return [];    
    
    return arrays.sort((a, b) => a - b);
}

console.log(sortNumbers([1, 2, 10, 50, 5]))
console.log(sortNumbers(null))
console.log(sortNumbers([]))