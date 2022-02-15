const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('ProgramAlarm', function () {
        // it('should return `2,0,0,0,99`', function () {
        //     const input: string = `1,0,0,0,99`;
        //     const result = Advent1.ProgramAlarm(input);
        //     assert.equal(result, `2,0,0,0,99`);
        // });

        // it('should return `2,3,0,6,99`', function () {
        //     const input: string = `2,3,0,3,99`;
        //     const result = Advent1.ProgramAlarm(input);
        //     assert.equal(result, `2,3,0,6,99`);
        // });

        // it('should return `2,4,4,5,99,9801`', function () {
        //     const input: string = `2,4,4,5,99,0`;
        //     const result = Advent1.ProgramAlarm(input);
        //     assert.equal(result, `2,4,4,5,99,9801`);
        // });
        // it('should return `30,1,1,4,2,5,6,0,99`', function () {
        //     const input: string = `1,1,1,4,99,5,6,0,99`;
        //     const result = Advent1.ProgramAlarm(input);
        //     assert.equal(result, `30,1,1,4,2,5,6,0,99`);
        // });
        it('should return ', function () {
            const result = Advent2.ProgramAlarm(puzzleInput.inputTest);
            assert.equal(result, 0);
        });
    });

});