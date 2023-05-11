export const targetDateAdvanced = (startAmount, targetAmount, rate, startDate) => {
  let days = 0;
  const ratePerDay = rate / 36000;
  let currentAmount = startAmount;
  while (currentAmount < targetAmount) {
    currentAmount += currentAmount * ratePerDay;
    days++;
  };
  const date = new Date(startDate); 
  date.setDate(date.getDate() + days);
  return date.toISOString().substring(0, 10);  
};
