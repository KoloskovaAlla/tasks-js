export const sumUnique = (lst) => {
  let uniqueValues = new Set();
  let repeatedValues = new Set();
  let sum = 0;
  for (let i = 0; i < lst.length; i++) {
    let val = lst[i];
    if (uniqueValues.has(val)) {
      uniqueValues.delete(val);
      repeatedValues.add(val);
      sum -= val;
    } else if (!repeatedValues.has(val)) {
      uniqueValues.add(val);
      sum += val;
    }
  }
  console.log(sum)
  return sum;
}

sumUnique([3, 4, 6, 3])