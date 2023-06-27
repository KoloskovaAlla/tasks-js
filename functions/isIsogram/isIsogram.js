export const isIsogram = (string) => {
  const lowerCaseString = string.toLowerCase();
  const letterFreq = {};

  for (let index = 0; index < lowerCaseString.length; index++) {
    const letter = lowerCaseString[index];

    if (letterFreq[letter]) {
      return false;
    } else {
      letterFreq[letter] = true;
    }
  }
  return true;
};
