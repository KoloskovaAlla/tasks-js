export const breakingChokolate = (length, width) => {
  if (length <= 0 || width <=0 ) return;
  return length * width - 1;
};