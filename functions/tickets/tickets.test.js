import { tickets } from './tickets';

const dataForTests = {
  test1: {
    ticketsData: {
      cardPrice: 500,
      ticketPrice: 15,
      fraction: 0.9,
    },
    expectedNumberofMovies: 43,
  },
  test2: {
    ticketsData: {
      cardPrice: 100,
      ticketPrice: 10,
      fraction: 0.95,
    },
    expectedNumberofMovies: 24,
  },
};

describe('Ticekts', () => {
  it('Unit test 1', () => {
    const {ticketsData, expectedNumberofMovies } = dataForTests.test1;
    const { cardPrice, ticketPrice, fraction } = ticketsData;
    const numberOfMovies = tickets(cardPrice, ticketPrice, fraction);
    expect(numberOfMovies).toEqual(expectedNumberofMovies);
  });
  it('Unit test 2', () => {
    const {ticketsData, expectedNumberofMovies } = dataForTests.test2;
    const { cardPrice, ticketPrice, fraction } = ticketsData;
    const numberOfMovies = tickets(cardPrice, ticketPrice, fraction);
    expect(numberOfMovies).toEqual(expectedNumberofMovies);
  })
});