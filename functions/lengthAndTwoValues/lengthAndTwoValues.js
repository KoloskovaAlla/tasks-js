export const lengthAndTwoValues = (length, value1, value2) => {
  let array = [];
  let currentValue = value1;
  for (let i = 0; i < length; i++) {
    if (currentValue === value1) {
      array.push(value1);
      currentValue = value2;
    }
    else {
      array.push(value2);
      currentValue = value1;
    }
  }
  return array;
};
