/**
 * Checks a command is passed as param
 *
 * @param {command} locations - command for pizzabot
 * @throws {error} - throws error if command has not been passed as param
 *
 * @example
 *
 *     initialCheck('5x5 (1, 3) (4, 4)')
 */

const initialCheck = (command) => {
    if(!command || !command.length)
        throw new Error('You need to create a command!');
};

module.exports = initialCheck;
