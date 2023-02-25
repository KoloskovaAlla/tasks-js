/** 
 * @param {number} place 
 * @returns {number}
 */

export const nthFibo = (place) => {
  const fiboNums = [0, 1];  
  
  for (let index = 2; index <= place; index++) {
    const fiboNum = fiboNums[index - 2] + fiboNums[index - 1];
    fiboNums.push(fiboNum);
  };

  return fiboNums[place - 1];
};
