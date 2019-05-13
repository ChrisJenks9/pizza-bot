const getDistance = require('../utils/getDistance');
const errorHandling = require('../errorHandling/index');

/**
 * Generates the directions taken
 *
 * @param {array} coords - array of the coordinates from the command
 * @param {strint} command - command given at input
 * @return {string} - returns generated directions
 *
 * @example
 *
 *     generateDirections(
 *       [ [ 1, 3 ], [ 4, 4 ] ], 
 *       'pizzaBot("5x5 (1, 3) (4, 4)")'
 *     )
 */

const generateDirections = (coords, command) => {
    const poles = {
        north: 'N',
        south: 'S',
        east: 'E',
        west: 'W',
        drop: 'D',
    };

    let currentLocation = [0, 0];
    let directions = '';

    for(const coord of coords) {
        errorHandling.rangeCheck(command, coord[0], coord[1]);
        if (coord[0] > currentLocation[0]) {
            const distance = getDistance(coord[0], currentLocation[0]);

            directions += poles.east.repeat(distance);
            currentLocation[0] = coord[0];
        } else {
            const distance = getDistance(coord[0], currentLocation[0]);

            directions += poles.west.repeat(distance);
            currentLocation[0] = coord[0];
        }

        if (coord[1] > currentLocation[1]) {
            const distance = getDistance(coord[1], currentLocation[1]);

            directions += poles.north.repeat(distance);
            currentLocation[1] = coord[1];
        } else {
            const distance = getDistance(coord[1], currentLocation[1]);

            directions += poles.south.repeat(distance);
            currentLocation[1] = coord[1];
        }
        
        directions += poles.drop
    }

    return directions;
};

module.exports = generateDirections;
