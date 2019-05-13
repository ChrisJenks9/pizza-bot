const expect = require('expect');
const getDistance = require('../getDistance');

const originA = 1;
const originB = 4;
const expectedDistance = 3;

describe('getDistance', () => {
  it('should return the distance between to origins', () => {
    expect(getDistance(originA, originB)).toEqual(expectedDistance);
  });
});
