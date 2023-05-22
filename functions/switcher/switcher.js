export const switcher = (string) => {
  let resultString = '';
  for (let index = 0; i < string.length; index++) {
    if (string[index] === 'a') resultString += 'b';
    else if (string[index] === 'b') resultString += 'a';
    else resultString += string[index];  
  };
  return resultString;
};