export const generateAcronym = (string) => {
  const words = string.split(' ');
  let acronym = '';
  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0].toUpperCase();
  }
  return (acronym);
};

generateAcronym('kiss on the cheek');
