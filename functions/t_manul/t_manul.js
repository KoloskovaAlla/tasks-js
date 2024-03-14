// const readline = require('readline');
import readline from 'readline';
const countManuls = (amountOfKids, pairs, startAmountOfManuls) => {
  let stickersCount = {};
  for (let i = 0; i < amountOfKids; i++) {
    stickersCount[i] = startAmountOfManuls[i];
  }
  return stickersCount;
};

const questionEvent = (questionCommand, stickersCount, answers) => {
  const numberPattern = /\d+/;
  const extractedNumber = parseInt(questionCommand.match(numberPattern)[0]);
  const stickers = stickersCount[extractedNumber - 1];
  answers.push(stickers);
};

const sendEvent = (sendCommand, stickersCount, pairs) => {
  const [, v, x] = sendCommand.split(' ');
  const childIndex = parseInt(v) - 1;

  stickersCount[childIndex] += parseInt(x);

  for (const pair of pairs) {
    const [friend1, friend2] = pair;
    if (friend1 === childIndex + 1) {
      const friendIndex = friend2 - 1;
      stickersCount[friendIndex] += parseInt(x);
    } else if (friend2 === childIndex + 1) {
      const friendIndex = friend1 - 1;
      stickersCount[friendIndex] += parseInt(x);
    }
  }
};

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let amountOfKids, pairs, amountOfEvents, startAmountOfManuls;
let eventCommands = [];
let answers = [];
let eventsProcessed = 0;
let lines;


