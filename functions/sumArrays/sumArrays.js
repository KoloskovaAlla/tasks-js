const sumArrays = (numbers) => {
 if (numbers.length === 0)  return 0;
 return numbers.reduce((a, b) => a + b, 0);
};

console.log(sumArrays([1, 5.2, 4, 0, -1]));
console.log(sumArrays([-2.398]));
console.log(sumArrays([]));