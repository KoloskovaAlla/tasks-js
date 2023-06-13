export const rotate = (text) => {
  console.log(text)
  if (text.length === 0) {
    return [];
  };
  let rotations = [];

  for (let index = 1; index <= text.length; index++) {
    let rotated = text.slice(index) + text.slice(0, index);
    rotations.push(rotated);
  };
  console.log(rotations);
  return rotations;
};

rotate('123456');
