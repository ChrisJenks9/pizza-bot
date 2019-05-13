const expect = require('expect');
const formatLocations = require('../index');

const pizzaOrders = '5x5 (1, 3) (4, 4)';
const expectedLocations = [[1, 3], [4, 4]];

describe('formatLocations', () => {
  it('should return the correct locations to deliver to', () => {
    expect(formatLocations(pizzaOrders)).toEqual(expect.arrayContaining(expectedLocations));
  });
});
