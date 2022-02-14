const assert = require('assert');
const puzzleInput = require('./string.ts');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('TyrannyRocketEquation', function () {
        it('should return 4 + 654 + 33583', function () {
            const input: string = `12
14
1969
100756`;
            const result = Advent1.TyrannyRocketEquation(input);
            assert.equal(result, 2 + 2 + 654 + 33583);
        });

        it('should return 3329926', function () {
            const result = Advent1.TyrannyRocketEquation(puzzleInput.inputTest);
            assert.equal(result, 3329926);
        });
    });
    
    describe('TyrannyRocketEquation 2', function () {
        it('should return 4 + 654 + 33583', function () {
            const input: string = `14
1969
100756`;
            const result = Advent2.TyrannyRocketEquation(input);
            assert.equal(result, 2 + 966 + 50346);
        });

        it('should return ', function () {
            const result = Advent2.TyrannyRocketEquation(puzzleInput.inputTest);
            assert.equal(result, 0);
        });
    });

});