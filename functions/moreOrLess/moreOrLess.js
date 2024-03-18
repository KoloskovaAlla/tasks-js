const patchFetch = require('./patchFetch.js');
patchFetch(142);

module.exports = async () => {
  const gameUrl = 'https://game.yandex';

  const makeGuess = async (value) => {
    const response = await fetch(`${gameUrl}?value=${value}`);
    const data = await response.json();
    return data;
  };

  let lowerBound = Number.MIN_SAFE_INTEGER;
  let upperBound = Number.MAX_SAFE_INTEGER;
  let guessCount = 0;
  let guessedNumber;

  while (guessCount < 55) {
    const guess = Math.floor((lowerBound + upperBound) / 2);
    const result = await makeGuess(guess);
    
    if (result.result === 'equal') {
      guessedNumber = guess;
      break;
    } else if (result.result === 'more') {
      upperBound = guess - 1;
    } else if (result.result === 'less') {
      lowerBound = guess + 1;
    }

    guessCount++;
  }

  return guessedNumber;
};