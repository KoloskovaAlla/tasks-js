export const conjectureCollatz = (num) => {
  let results = [];

  while (num !== 1) {;
    results.push(num);
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;    
  }
  results.push(1);
  return results;
};
