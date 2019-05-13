/**
 * Checks format of the command is correct
 *
 * @param {command} locations - command for pizzabot
 * @throws {error} - throws error if format is not correct
 *
 * @example
 *
 *     formatCheck('5x5 (1, 3) (4, 4)')
 */

const formatCheck = (command) => {
    const formatErrorMessage = 'Format is Incorrect!';
    const coords = command.slice(5, -1)
        .split(') (');

    if (command[4] !== '(' || command[command.length-1] !== ')')
        throw new Error(formatErrorMessage);

    if(command[1] !== 'x')
        throw new Error(formatErrorMessage);

    for(coord of coords) {
        if (coord[1] !== ',') 
            throw new Error(formatErrorMessage);

        if (coord[2] !== ' ') 
            throw new Error(formatErrorMessage);

        if (isNaN(Number(coord[0])) || isNaN(Number(coord[3])))
            throw new Error(formatErrorMessage);
    }
};

module.exports = formatCheck;
