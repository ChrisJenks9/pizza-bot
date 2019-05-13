/**
 * Checks command doesnt instruct pizzabot to deliver outside grid
 *
 * @param {command} locations - command for pizzabot
 * @throws {error} - throws error if coordinate is outside grid
 *
 * @example
 *
 *     rangeCheck('5x5 (1, 3) (4, 4)', 1, 3)
 */

const rangeCheck = (command, coordX, coordY) => {
    const commandX = command.slice(0, 1);
    const commandY = command.slice(2, 3);
    const errorMsg = 'Delivery is Out of Range!'

    if (commandX < coordX)
        throw new Error(errorMsg);

    if (commandY < coordY)
        throw new Error(errorMsg);
};

module.exports = rangeCheck;
