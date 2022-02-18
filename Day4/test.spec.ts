const assert = require('assert');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('Secure Container 1', function () {

        it('should return 1154', function () {
            const input: string = `240920-789857`;
            const result = Advent1.SecureContainer(input);
            assert.equal(result, 1154);
        });

    });

    describe('Secure Container 2', function () {

        it('should return ', function () {
            const input: string = `240920-789857`;
            const result = Advent2.SecureContainer(input);
            assert.equal(result, 0);
        });

    });
});