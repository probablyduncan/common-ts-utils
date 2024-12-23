import { expect, test } from 'vitest';
import { shuffle, shuffleRef } from '../src/shuffle';

const arrs: any[][] = [
    [1, 2, 3, 4, 5],
    ["a", "b", "c", "d", "e"],
    [false, true, false, false, true, true, false, true],
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