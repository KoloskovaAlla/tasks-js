export const sortByLength = (array) => {
  console.log(array.sort((a, b) => a.length - b.length))
  return array.sort((a, b) => a.length - b.length);
};

sortByLength(["Eyes", "Glasses", "Monocles", "Telescopes"]);