import { likes } from './likes';

const dataForTests = {
  test1: {
    users: ['Alex', 'Jacob', 'Mark', 'Max', 'Alla'],
    expectedLikes: 'Alex, Jacob and 3 others like this'
  },
  test2: {
    users: ['Kolya', 'Alla'],
    expectedLikes: 'Kolya and Alla like this'
  },
  test3: {
    users: ['Kolya'],
    expectedLikes: 'Kolya likes this '
  },
  test4: {
    users: [],
    expectedLikes: 'no one likes this'
  },
};

describe('likes', () => {
  it('Unit test 1', () => {
    const { users, expectedLikes } = dataForTests.test1;
    const resultLikes = likes(users);
    expect(resultLikes).toEqual(expectedLikes);
  });
})