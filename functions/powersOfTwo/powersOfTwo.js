/** 
 * @param {number} indicator
 * @returns {array}
 */

export const powersOfTwo = (indicator) => {
  const powers = [];

  for (let count = 0; count <= indicator; count++) {
    const power = Math.pow(2, count);
    powers.push(power);
  };

  return powers;
};
