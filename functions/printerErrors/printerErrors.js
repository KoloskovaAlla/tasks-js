export const printerErrors = (string) => {
  let countErrors = 0;
  for (let index = 0; index < string.length; index++) if (string[index] > 'm' || string[index] < 'a')  countErrors++;
  console.log(`${countErrors} / ${string.length}`);
  return (`${countErrors} / ${string.length}`);
};

printerErrors("aaaxbbbbyyhwawiwjjjwwm");