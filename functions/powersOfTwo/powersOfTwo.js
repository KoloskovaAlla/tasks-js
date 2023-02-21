/** 
 * @param {number} indicator
 * @returns {array}
 */

export const powersOfTwo = (indicator) => {
  const arr = [];

  for (let index = 0; index <= indicator; index++) {
    arr.push(Math.pow(2, index));
  };

  return arr;
};
