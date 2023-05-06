export const sumEvenNumbers = (array) => {
  let sum = 0; 
  array.forEach((num) => {
    if (num % 2 === 0) sum += num;
  });
  return sum;
};