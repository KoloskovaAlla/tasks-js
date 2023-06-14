export const rotate = (text) => {
  if (text.length === 0) {
    return [];
  };
  let rotations = [];

  for (let index = 1; index <= text.length; index++) {
    let rotated = text.slice(index) + text.slice(0, index);
    rotations.push(rotated);
  };
  return rotations;
};
