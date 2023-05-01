export const racing = (v1, v2, S) => {
  if (v1 > v2) return null;
  const time = S / (v2 - v1);
  const hours = Math.floor(time);
  const minutes = Math.floor((time - hours) * 60);
  const seconds =  Math.floor(((time - hours) * 60 - minutes) * 60); 
  return [hours, minutes, seconds];
};

