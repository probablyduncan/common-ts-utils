import { expect, test } from 'vitest';
import { reduceToObject } from '../src/reduceToObject';

test.for([
    {
        arr: [{ id: "a", str: "aval", }, { id: "b", str: "bval" }],
        key: (k: any) => k.id,
        val: (v: any) => v.str,
        result: { a: "aval", b: "bval" },
    },
    {
        arr: [],
        key: (k: any) => k.id,
        val: (v: any) => v.str,
        result: {},
    },
    {
        arr: [{ id: "x", value: 1 }, { id: "y", value: 2 }, { id: "z", value: 3 }],
        key: (k: any) => k.id,
        val: (v: any) => v.value,
        result: { x: 1, y: 2, z: 3 },
    },
    {
        arr: [{ id: "dup", val: 1 }, { id: "dup", val: 2 }],
        key: (k: any) => k.id,
        val: (v: any) => v.val,
        result: { dup: 2 }, // last wins
    },
    {
        arr: [{ id: "a", nested: { foo: "bar" } }],
        key: (k: any) => k.id,
        val: (v: any) => v.nested,
        result: { a: { foo: "bar" } },
    },
    {
        arr: [{ id: "1", val: null }, { id: "2", val: undefined }],
        key: (k: any) => k.id,
        val: (v: any) => v.val,
        result: { "1": null, "2": undefined },
    },
    {
        arr: [{ id: "a", val: 1 }, { id: "b", val: 2 }],
        key: (k: any) => k.val.toString(),
        val: (v: any) => v.id,
        result: { "1": "a", "2": "b" },
    },
])("reduceToObject: %o", ({ arr, key, val, result }) => {
    expect(reduceToObject(arr, key, val)).toEqual(result);
});