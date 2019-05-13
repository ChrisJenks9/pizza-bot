const expect = require('expect');
const generateDirections = require('../index');

const coordinates = [[1, 3], [4, 4]];
const command = '5x5 (1, 3) (4, 4)';
const expectedRoute = 'ENNNDEEEND';

describe('generateDirections', () => {
  it('should return the correct route from given coordinates', () => {
    expect(generateDirections(coordinates, command)).toEqual(expect.stringContaining(expectedRoute));
  });
});
