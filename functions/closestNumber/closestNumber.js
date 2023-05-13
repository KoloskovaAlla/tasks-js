export const closestNumber = (array) => {
  let resultArray = [];
  array.forEach((number) => {
    resultArray.push(Math.round(number/10) * 10)
  }); 
  return resultArray
};
