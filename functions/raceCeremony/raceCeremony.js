export const raceCeremony = (blocks) => {
  const firstPlaceHeight = Math.ceil(blocks / 3) + 1; 
  const secondPlaceHeight =  firstPlaceHeight - 1;
  const thirdPlaceHeight = blocks - firstPlaceHeight - secondPlaceHeight;
  console.log([secondPlaceHeight, firstPlaceHeight, thirdPlaceHeight]);
  return [secondPlaceHeight, firstPlaceHeight, thirdPlaceHeight]
};

// 11 ->   [4, 5, 2]
// 6  ->   [2, 3, 1]
// 10 ->   [4, 5, 1]

raceCeremony(11);
raceCeremony(6);
raceCeremony(10);