/**
 * Wraps i in an array if it is not already an array.
 * @param i a single instance of type T or an array of type T[].
 * @returns an array of type T[].
 */
export function toSeveral<T>(i: T | T[]): T[] {
    return Array.isArray(i) ? i : [i];
}

export type SingleOrSeveral<T> = T | T[];
