import { expect, test } from 'vitest';
import { shuffle, shuffleRef } from '../src/shuffle';

const arrs: any[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    [false, true, false, false, true, true, false, true, true, false, false, false, true, true, false, true, false, true, true, true],
];

test("shuffle", () => {
    arrs.forEach(arr => {

        const shuffled = shuffle(arr);
        expect(shuffled).toBeInstanceOf(Array);
        expect(shuffled).not.toEqual(arr);
    });
});

test("shuffleRef", () => {
    arrs.forEach(arr => {

        const copy = [...arr];
        const shuffledRef = shuffleRef(copy);

        expect(shuffledRef).toBeInstanceOf(Array);
        expect(shuffledRef).not.toEqual(arr);
        expect(shuffledRef).toEqual(copy);
    });
});