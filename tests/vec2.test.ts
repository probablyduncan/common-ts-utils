import { expect, test } from 'vitest';
import Vec2 from "../src/vec2";

test("vec2 constructors", () => {

    const v1 = new Vec2(1, 2);
    expect(v1.x).toBe(1);
    expect(v1.y).toBe(2);

    const v2 = new Vec2(4);
    expect(v2.x).toBe(4);
    expect(v2.y).toBe(4);

    const v3 = new Vec2({ x: 7, y: 12 });
    expect(v3.x).toBe(7);
    expect(v3.y).toBe(12);

    const v4 = new Vec2();
    expect(v4.x).toBe(0);
    expect(v4.y).toBe(0);

    const v5 = Vec2.From(1, 2);
    expect(v5.x).toBe(1);
    expect(v5.y).toBe(2);

    const v6 = Vec2.One;
    expect(v6.x).toBe(1);
    expect(v6.y).toBe(1);

    const v7 = Vec2.Half;
    expect(v7.x).toBe(0.5);
    expect(v7.y).toBe(0.5);

    const v8 = Vec2.Zero;
    expect(v8.x).toBe(0);
    expect(v8.y).toBe(0);
});

test("vec2 clone", () => {

    const v1 = Vec2.From(27, 54);
    const v2 = v1.clone();

    expect(v1).toEqual(v2);
    expect(v1.x).toEqual(v2.x);
    expect(v1.y).toEqual(v2.y);

    expect(v1).not.toBe(v2);

    v1.x = -24;
    v2.y = -12;

    expect(v1.x).not.toBe(v2.x);
    expect(v1.y).not.toBe(v2.y);
});

test("vec2 toString", () => {

    const v1 = Vec2.From(4, 8);
    expect(v1.toString()).contain("4");
    expect(v1.toString()).contain("8");
});

test("vec2 add", () => {

    const v1 = Vec2.From(7);
    const v2 = Vec2.From(-4, 83);

    const r1 = v1.add(v2);
    const r2 = v2.add(v1);

    expect(r1.x).toBe(3);
    expect(r1.y).toBe(90);

    expect(r1.x).toBe(r2.x);
    expect(r1.y).toBe(r2.y);

    const v3 = Vec2.From(41, -8);
    const r3 = v3.add(-16);
    expect(r3.x).toBe(25);
    expect(r3.y).toBe(-24);
});

test("vec2 subtract", () => {

    const v1 = Vec2.From(7);
    const v2 = Vec2.From(-4, 83);

    const r1 = v1.subtract(v2);

    expect(r1.x).toBe(11);
    expect(r1.y).toBe(-76);

    const r2 = v2.subtract(v1);
    expect(r2.x).toBe(-11);
    expect(r2.y).toBe(76);

    const v3 = Vec2.From(41, -8);
    const r3 = v3.subtract(-16);
    expect(r3.x).toBe(57);
    expect(r3.y).toBe(8);

    // check no mutation
    expect(v1.x).toBe(7);
    expect(v1.y).toBe(7);
});

test("vec2 multiply", () => {

    const v1 = Vec2.From(2, 5);
    const v2 = Vec2.From(7, 2);

    const r1 = v1.multiply(v2);
    expect(r1.x).toBe(14);
    expect(r1.y).toBe(10);

    const r2 = v2.multiply(v1);
    expect(r2.x).toBe(r1.x);
    expect(r2.y).toBe(r1.y);

    const r3 = v1.multiply(4);
    expect(r3.x).toBe(8);
    expect(r3.y).toBe(20);
});

test("vec2 divide", () => {
    
    const v1 = Vec2.From(2, 5);
    const v2 = Vec2.From(7, 2);

    const r1 = v1.divide(v2);
    expect(r1).toStrictEqual(Vec2.From(2/7, 2.5));

    const r2 = v2.divide(v1);
    expect(r2).toStrictEqual(Vec2.From(3.5, 0.4));

    const r3 = v1.divide(4);
    expect(r3).toStrictEqual(Vec2.From(0.5, 1.25));
});

test("vec2 abs", () => {
    const v1 = Vec2.From(7, -3);
    const r1 = v1.abs();

    expect(r1).toStrictEqual(Vec2.From(7, 3));

    // check no mutation
    expect(v1.y).toBe(-3);
});

test("negate", () => {

    const n1 = Vec2.From(4, -7).negate();
    const n2 = Vec2.From(0).negate();
    const n3 = Vec2.From(-1, 4).negate();

    expect(n1).toStrictEqual(Vec2.From(-4, 7));
    expect(n2).toStrictEqual(Vec2.From(-0));
    expect(n3).toStrictEqual(Vec2.From(1, -4));
});

test("magnitude", () => {

    const v1 = Vec2.From(1, 1);
    expect(v1.magnitude()).toBe(Math.SQRT2);

    const v2 = Vec2.From(1, 4);
    expect(v2.magnitude()).toBe(Math.sqrt(17));

    const v3 = Vec2.Zero;
    expect(v3.magnitude()).toStrictEqual(0);
});

test("normalized", () => {

    const n1 = Vec2.From(1, 4).normalized();
    expect(n1.y).toBeGreaterThan(n1.x);
    expect(n1.x).toBeLessThan(1);

    const n2 = Vec2.One.normalized();
    expect(n2.x).toBe(n2.y);
    expect(n2.x.toPrecision(5)).toBe((Math.SQRT2/2).toPrecision(5));
    
    expect(Vec2.Zero.normalized()).toStrictEqual(Vec2.Zero);
});

test("clamp", () => {
    // todo
});

test("unclamp", () => {
    // todo
});

test("lerp", () => {
    // todo
});

test("unlerp", () => {
    // todo
});