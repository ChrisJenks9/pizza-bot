const getDirections = require('./pizzaBot/index');

/**
 * Entry point for pizzabot
 *
 * @param {string} command - command for pizzabot
 * @return {string} - directions taken by pizzabot
 *
 * @example
 *
 *     pizzaBot('5x5 (1, 3) (4, 4)')
 */

const pizzaBot = (command) => {
    try {
        return getDirections(command)
    } catch(e) {
        throw Error(e.message);
    }
}

module.exports = pizzaBot;
