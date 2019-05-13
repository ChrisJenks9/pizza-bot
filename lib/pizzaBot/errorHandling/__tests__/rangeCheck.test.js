const expect = require('expect');
const rangeCheck = require('../rangeCheck');

const gridRangeExceededError = 'Delivery is Out of Range!';

describe('rangeCheck', () => {
    it('should return an error when the grid range has been exceeded', () => {
        expect(() => rangeCheck('5x6 (4, 4) (5, 7)', 6, 6)).toThrowError(gridRangeExceededError);
        expect(() => rangeCheck('5x6 (4, 4) (5, 7)', 5, 7)).toThrowError(gridRangeExceededError);
    });
});