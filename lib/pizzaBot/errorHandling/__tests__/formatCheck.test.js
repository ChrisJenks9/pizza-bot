const expect = require('expect');
const formatCheck = require('../formatCheck');

const formatIncorrectError = 'Format is Incorrect!';

describe('formatCheck', () => {
      it('should return an error when the format is not correct', () => {
        expect(() => formatCheck('5x6 4, 4) (5, 6)')).toThrowError(formatIncorrectError);
        expect(() => formatCheck('5x6 (4, 4) (5, 6')).toThrowError(formatIncorrectError);
        expect(() => formatCheck('5b6 (4, 4) (5, 6)')).toThrowError(formatIncorrectError);
        expect(() => formatCheck('5b6 (4, 4) (5v 6)')).toThrowError(formatIncorrectError);
        expect(() => formatCheck('5b6 (4v 4) (5, 6)')).toThrowError(formatIncorrectError);
        expect(() => formatCheck('5b6 (4,4) (5, 6)')).toThrowError(formatIncorrectError);
        expect(() => formatCheck('5b6 (4, 4) (5,6)')).toThrowError(formatIncorrectError);
        expect(() => formatCheck('5b6 (m, 4) (5, 6)')).toThrowError(formatIncorrectError);
        expect(() => formatCheck('5b6 (4, 4) (5, m)')).toThrowError(formatIncorrectError);
      });
  });