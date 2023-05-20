export const compareProbabilities = (probability1, probability2) => {
  const [numerator1, denominator1] = probability1.split(':');
  const [numerator2, denominator2] = probability2.split(':');
  
  const ratio1 = numerator1 / denominator1;
  const ratio2 = numerator2 / denominator2;
  
  console.log(ratio1 > ratio2);
  return (ratio1 > ratio2);
};

compareProbabilities('1:2', '1:5')