export const alternateCase = (string) => {
  let char;
  let alternateCaseString = '';
  for (let index = 0; index < string.length; index++) {
    char = string[index];  
    if (char === char.toLowerCase()) alternateCaseString += char.toUpperCase();
    else alternateCaseString += char.toLowerCase();
  }
  console.log(alternateCaseString)
  return alternateCaseString;
};

alternateCase('What season do you liKe?')