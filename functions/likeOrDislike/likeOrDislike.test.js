import { likeOrDislike } from './likeOrDislike.js';

const dataForTests = {
  test1: {
  buttons: ['Dislike'],
  expectedState: 'Dislike',
  },
  test2: {
    buttons: ['Like', 'Like'],
    expectedState: 'Nothing',
  },
  test3: {
    buttons: ['Like', 'Dislike', 'Dislike'],
    expectedState:  'Nothing',
  },
  test4: {
    buttons: ['Dislike', 'Like'],
    expectedState: 'Like',
  },
}

describe('classNames:', () => {
  it('Unit test 1', () => {
    const { buttons, expectedState } = dataForTests.test1;    
    const state = likeOrDislike(buttons);
    expect(state).toEqual(expectedState);
  });
  it('Unit test 2', () => {
    const { buttons, expectedState } = dataForTests.test2;    
    const state = likeOrDislike(buttons);
    expect(state).toEqual(expectedState);
  });
  it('Unit test 3', () => {
    const { buttons, expectedState } = dataForTests.test3;    
    const state = likeOrDislike(buttons);
    expect(state).toEqual(expectedState);
  });
  it('Unit test 4', () => {
    const { buttons, expectedState } = dataForTests.test4;    
    const state = likeOrDislike(buttons);
    expect(state).toEqual(expectedState);
  });
});
