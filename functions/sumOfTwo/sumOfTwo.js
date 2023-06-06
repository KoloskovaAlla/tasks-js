export const sumofTwo = (array, sum) => {
  let index1;
  let index2;
  for (let count = 0; count < array.length; count++) {
    for (let innerCount = count + 1; innerCount < array.length; innerCount++) {
      if (array[count] + array[innerCount] === sum) {
        index1 = count;
        index2 = innerCount;
        return [count, innerCount];
      }
    }
  }
};
