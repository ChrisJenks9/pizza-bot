const expect = require('expect');
const pizzaBot = require('../index.js');

const expectedRouteTaken = 'ENNNDEEEND'
const noCommandError = 'You need to create a command!';
const gridRangeExceededError = 'Delivery is Out of Range!';
const formatIncorrectError = 'Format is Incorrect!';

describe('pizzaBot', () => {
  it('should return the correct route taken', () => {
    expect(pizzaBot('5x5 (1, 3) (4, 4)')).toEqual(expect.stringContaining(expectedRouteTaken));
  });
  describe('errorHandling', () => {
    it('should return an error when no command has been passed', () => {
      expect(() => pizzaBot()).toThrowError(noCommandError);
    });
    it('should return an error when the grid range has been exceeded', () => {
      expect(() => pizzaBot('5x6 (4, 4) (5, 7)')).toThrowError(gridRangeExceededError);
    });
    it('should return an error when the format is not correct', () => {
      expect(() => pizzaBot('5x6 4, 4) (5, 6)')).toThrowError(formatIncorrectError);
      expect(() => pizzaBot('5x6 (4, 4) (5, 6')).toThrowError(formatIncorrectError);
      expect(() => pizzaBot('5b6 (4, 4) (5, 6)')).toThrowError(formatIncorrectError);
      expect(() => pizzaBot('5b6 (4, 4) (5v 6)')).toThrowError(formatIncorrectError);
      expect(() => pizzaBot('5b6 (4v 4) (5, 6)')).toThrowError(formatIncorrectError);
      expect(() => pizzaBot('5b6 (4,4) (5, 6)')).toThrowError(formatIncorrectError);
      expect(() => pizzaBot('5b6 (4, 4) (5,6)')).toThrowError(formatIncorrectError);
      expect(() => pizzaBot('5b6 (m, 4) (5, 6)')).toThrowError(formatIncorrectError);
      expect(() => pizzaBot('5b6 (4, 4) (5, m)')).toThrowError(formatIncorrectError);
    });
  });
});
