/**
 * Clamp x within the bounds of v0 and v1.
 * @param x value to clamp.
 * @param v0 first bound (can be min or max).
 * @param v1 second bound (can be min or max).
 * @returns x, or min of v0 and v1 if less than both, or max of v0 and v1 if greater than both.
 */
export function clamp(x: number, v0: number, v1: number): number {
    const { min, max } = resolveMinMax(v0, v1);
    return Math.min(Math.max(x, min), max);
}

/**
 * Clamp x outside the bounds of v0 and v1. If x is between v0 and v1, will return either v0 or v1, depending on m.
 * @param x value to clamp.
 * @param v0 first bound (can be min or max).
 * @param v1 second bound (can be min or max).
 * @param m optional, value to determine whether to clamp to min or max bound. If x is greater than m and between v0 and v1, x will be clamped to the greater of v0 or v1. If less than m, will clamp to the lesser. Defaults to the midpoint between v0 and v1.
 * @returns x if x is not between v0 and v1, or v0 or v1 depending on m.
 */
export function unclamp(x: number, v0: number, v1: number, m?: number): number {
    const { min, max } = resolveMinMax(v0, v1);
    m ??= max - min;
    return x > m ? Math.max(max, x) : Math.min(min, x);
}

/**
 * @param x interpolation value between v0 and v1. Usually in [0, 1].
 * @param v0 lower end of the range.
 * @param v1 upper end of the range.
 * @param c if true, clamp interpolation value between 0 and 1.
 * @returns a value interpolated between a and b based on the value of x.
 */
export function lerp(v0: number, v1: number, x: number, c: boolean = false): number {
    if (c) {
        x = clamp(x, 0, 1);
    }

    return (1 - x) * v0 + x * v1;
}

/**
 * @param x value between a and b.
 * @param v0 lower end of the range.
 * @param v1 upper end of the range.
 * @param c if true, clamp return value between 0 and 1.
 * @returns a value representing the proportion of x between a and b.
 */
export function unlerp(v0: number, v1: number, x: number, c: boolean = false): number {

    if (v1 === v0) {
        return v1;
    }

    const result = (x - v0) / (v1 - v0);
    return c ? clamp(result, 0, 1) : result;
}

/**
 * Determine min and max value of two numbers.
 * @param v0 first value.
 * @param v1 second value.
 * @returns object containing min of params and max of params.
 */
export function resolveMinMax(v0: number, v1: number): {
    min: number, max: number,
} {
    return {
        min: Math.min(v0, v1),
        max: Math.max(v0, v1),
    };
}