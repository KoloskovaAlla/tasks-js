/** 
 * @param {number} place 
 * @returns {number}
 */

export const recursionFibo = (place) => {
  const fiboNums = [0, 1];  
  let index = 2;
  const nthFibo = () => {    
    const fiboNum = fiboNums[index - 2] + fiboNums[index - 1];
    fiboNums.push(fiboNum);
    
    if (index+1 !== place) {      
      index++;
      nthFibo();
    } 
    else {     
      return fiboNum;    
    };
  };
  nthFibo();
};
