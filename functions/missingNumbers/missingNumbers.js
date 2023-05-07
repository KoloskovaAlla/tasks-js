export const missingNumbers = (arr) => {  
  arr.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    count += arr[i + 1] - arr[i] - 1;
  }

  return count;
};