

// const readline = require('readline');
import readline from 'readline';

const maxAmountMoney = (numberOfGifts, credit, giftsPrices) => {
  let maxFinishAmaunt = 0;
  for (let variantOfCredit = 1; variantOfCredit <= credit; variantOfCredit++) {
    let money = variantOfCredit ;
    for (let currentIndexGift = 0; currentIndexGift < numberOfGifts; currentIndexGift++) {
      if (money >= giftsPrices[currentIndexGift]) {
        money -= giftsPrices[currentIndexGift];
      };
    };
    if (money > maxFinishAmaunt) maxFinishAmaunt = money;
  };
  return maxFinishAmaunt;
};

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOfGifts, credit;
let giftsPrices = [];

reader.on('line', (line) => {
     // Парсим первую строку, где содержится количество подарков и размер предодобренного кредита
    if (!numberOfGifts && !credit) {
        [numberOfGifts, credit] = line.split(' ').map(Number);
    } else {
        // Парсим цены подарков
        giftsPrices = line.split(' ').map(Number);
        console.log(maxAmountMoney(numberOfGifts, credit, giftsPrices));
        reader.close();
    }  
});
