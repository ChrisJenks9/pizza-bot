/**
 * Creates an array for coordinates representing locations on the grid
 *
 * @param {string} locations - command for pizzabot
 * @return {array} - returns array of coordinates
 *
 * @example
 *
 *     formatLocations('5x5 (1, 3) (4, 4)')
 */

const formatLocations = (locations) => {
    console.log(locations);
    let coords = locations.slice(5, -1)
        .split(') (')
        .map(element => {
            return element.split(', ')
                .map(element => Number(element));
        });

    return coords;
};

module.exports = formatLocations;