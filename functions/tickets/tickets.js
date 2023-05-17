export const tickets = (card, ticket, perc) => {
  let priceA = 0;
  let priceB = card;
  let n = 0;
  while (priceA < priceB) {
    n++;
    priceA += ticket;
    priceB += ticket * Math.pow(perc, n);
  };
  console.log(n);
  return n;
};

tickets(500, 15, 0.9);
tickets(100, 10, 0.95);