import { expect, test } from 'vitest';
import { toSeveral, type SingleOrSeveral } from '../src/singleOrSeveral';

test("singleOrSeveral", () => {

    const arrays: any[] = [
        ["hey", "ho"],
        [1, 2, 3, 4],
        [false, true, false],
    ];

    arrays.forEach(arr => {
        expect(toSeveral(arr)).toBe(arr);
        expect(Array.isArray(toSeveral(arr[0]))).toBeTruthy();
        expect(Array.isArray(toSeveral(arr))).toBeTruthy();
    });

    const values = [
        "haha", 71, true, false, -14,
    ];

    values.forEach(val => {
        expect(Array.isArray(toSeveral(val))).toBeTruthy();
        expect(toSeveral(val)).toStrictEqual([val]);
        expect(toSeveral(val).length).toBe(1);
    })
});