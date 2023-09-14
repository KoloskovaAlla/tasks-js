export const twoSum = (numbers, target) => {
  let index1;
  let index2;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        index1 = i;
        index2 = j;
      };
    };
  };
  return [index1, index2];
};

console.log(twoSum([1, 2, 3], 4));