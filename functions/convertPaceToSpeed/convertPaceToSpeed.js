export const convertPaceToSpeed = (paces) => {
  const speeds = [];
  paces.forEach((pace) => {        
   speeds.push(60/pace);   
  }) 
  return speeds;
};
