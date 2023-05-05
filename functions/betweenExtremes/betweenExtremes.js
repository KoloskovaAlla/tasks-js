export const betweenExtremes = (array) => {
  let min = array[0];
  let max = array[0];
  array.forEach((num) => {
    if (num < min) min = num;
    if (num > max) max = num;
  }); 
  return max - min;
};
