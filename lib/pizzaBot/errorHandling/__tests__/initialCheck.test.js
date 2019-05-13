const expect = require('expect');
const initialCheck = require('../initialCheck');

const noCommandError = 'You need to create a command!';

describe('initialCheck', () => {
    it('should return an error when no command has been passed', () => {
        expect(() => initialCheck()).toThrowError(noCommandError);
    });
});