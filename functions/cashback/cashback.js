const cashback = (minPrice, minCashback, sum) => {
    const items = Math.floor(sum / minPrice);
    console.log(items);
    const fullCashback = items*minCashback;
    return fullCashback;
};

console.log(cashback(100, 1, 2025));