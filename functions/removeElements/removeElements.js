export const removeElements = (fullArray, removableElementsArray) => {
  return fullArray.filter((value) => !removableElementsArray.includes(value));
};
