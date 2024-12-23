import { expect, test } from 'vitest';
import { clamp, lerp, resolveMinMax, unlerp } from '../src/math';

test("clamp", () => {

    // clamp when below range
    expect(clamp(2, 4, 6)).toBe(4);
    expect(clamp(-8, -5, -2)).toBe(-5);

    // clamp when above range
    expect(clamp(38, 4, 6)).toBe(6);
    expect(clamp(-3, -16, -8)).toBe(-8);

    // don't clamp when within range
    expect(clamp(5, 4, 6)).toBe(5);
    expect(clamp(-2, -21, -1)).toBe(-2);
});

test("lerp", () => {
    expect(lerp(1, 2, 0.5)).toBe(1.5);
    expect(lerp(0, 100, .271)).toBe(27.1);

    expect(lerp(-10, 10, 0.5)).toBe(0);
    expect(lerp(-10, 10, 0.75)).toBe(5);

    // clamping
    expect(lerp(-1, 3, 2, true)).toBe(3);
    expect(lerp(-1, 3, 2, false)).toBe(7);
});

test("unlerp", () => {
    expect(unlerp(0, 10, 5)).toBe(0.5);
    expect(unlerp(0, 10, 8.24761)).toBe(0.824761);

    // clamping
    expect(unlerp(-7, -5, -9, false)).toBe(-1);
    expect(unlerp(-7, -5, -9, true)).toBe(0);
});

test("resolve min max", () => {
    const m1 = resolveMinMax(1, 4);
    const m2 = resolveMinMax(52, 4);
    const m3 = resolveMinMax(4, 4);
    const m4 = resolveMinMax(4, -4);

    expect(m1.max).toBe(4);
    expect(m2.max).toBe(52);
    expect(m3.max).toBe(4);
    expect(m4.max).toBe(4);

    expect(m1.min).toBe(1);
    expect(m2.min).toBe(4);
    expect(m3.min).toBe(4);
    expect(m4.min).toBe(-4);
});