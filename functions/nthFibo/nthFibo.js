/** 
 * @param {number} place 
 * @returns {number}
 */

export const nthFibo = (place) => {
  let fibo = [0, 1];

  if (place === 1) return 0;
  if (place === 2) return 1;

  let currentNumberFibo;

  for (let index = 2; index <= place; index++) {
    currentNumberFibo = fibo[index - 2] + fibo[index - 1];
    fibo.push(currentNumberFibo);

    if (index + 1 === place) return currentNumberFibo;
  };
};
