/**
 * Gets distance between to points on grid
 *
 * @param {number} first - current point on grid
 * @param {number} second - next point on grid
 * @return {number} - distance between points on grid
 *
 * @example
 *
 *     getDistance(1, 3)
 */

const getDistance = (first, second) => {
    return Math.abs(first - second);
};

module.exports = getDistance;
