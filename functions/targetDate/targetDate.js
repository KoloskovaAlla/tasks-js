export const targetDate = (startAmount, targetAmount, rate) => {
  let days = 0;
  const ratePerDay = rate / 36000;
  let currentAmount = startAmount;
  while (currentAmount < targetAmount) {
    currentAmount += currentAmount * ratePerDay;
    days++;
  };
  const date = new Date('2016-01-01');
  date.setDate(date.getDate() + days);
  console.log(days);
  return date.toISOString().substring(0, 10);  
};

targetDate(100, 101, 0.98);