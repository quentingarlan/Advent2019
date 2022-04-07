const assert = require('assert');
let Advent1 = require('./Part1/adventPart1.ts');
let Advent2 = require('./Part2/adventPart2.ts');

describe('Advent Calendar', function () {
    describe('Universal Orbit Map 1', function () {
        it('should return 42', function () {
            const input: string = `COM)B
            B)C
            C)D
            D)E
            E)F
            B)G
            G)H
            D)I
            E)J
            J)K
            K)L`;
            const result = Advent1.UniversalOrbitMap(input);
            assert.equal(result, 42);
        });
    });

    // describe('Secure Container 2', function () {
    //     it('should return ', function () {
    //         const input: string = `240920-789857`;
    //         const result = Advent2.SecureContainer(input);
    //         assert.equal(result, 0);
    //     });
    // });
});