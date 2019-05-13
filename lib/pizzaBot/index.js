const formatLocations = require('./formatLocations/index');
const generateDirections = require('./generateDirections/index');
const errorHandling = require('./errorHandling/index');

/**
 * Gets directions taken by pizzabot
 *
 * @param {string} command - command for pizzabot
 * @return {string} - directions
 *
 * @example
 *
 *     getDirections('5x5 (1, 3) (4, 4)')
 */

const getDirections = (command) => {
    errorHandling.initialCheck(command);
    errorHandling.formatCheck(command);

    const coords = formatLocations(command);
    const directions = generateDirections(coords, command);
    
    return directions;
};

module.exports = getDirections;