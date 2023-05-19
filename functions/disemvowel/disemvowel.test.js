import { disemvowel } from './disemvowel';

const dataForTests = {
  test1: {
    string: 'This website is for losers LOL!',
    expectedSentence: 'Ths wbst s fr lsrs LL!',
  },
  test2: {
    string: 'Trolls are attacking your comment section!',
    expectedSentence: 'Trlls r ttckng yr cmmnt sctn!',
  },
  test3: {
    string: 'Your task is to write a function that takes a string and return a new string with all vowels removed.',
    expectedSentence: 'Yr tsk s t wrt  fnctn tht tks  strng nd rtrn  nw strng wth ll vwls rmvd.',
  },
};

describe('Disemvowel Trolls', () => {
  it('Unit test 1', () => {
    const { string, expectedSentence } = dataForTests.test1;
    const resultSentence = disemvowel(string);
    expect(resultSentence).toEqual(expectedSentence);
  });
});