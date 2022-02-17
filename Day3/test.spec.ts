const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('CrossedWires', function () {

        it('should return 159', function () {
            const firstLine: string = `R75,D30,R83,U83,L12,D49,R71,U7,L72`;
            const secondLine: string = `U62,R66,U55,R34,D71,R55,D58,R83`;
            const result = Advent1.CrossedWires(firstLine, secondLine);
            assert.equal(result, 159);
        });
        it('should return 135', function () {
            const firstLine: string = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51`;
            const secondLine: string = `U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;
            const result = Advent1.CrossedWires(firstLine, secondLine);
            assert.equal(result, 135);
        });
        it('should return ', function () {
            const result = Advent1.CrossedWires(puzzleInput.firstLine, puzzleInput.secondLine);
            assert.equal(result, 0);
        });
    });

});