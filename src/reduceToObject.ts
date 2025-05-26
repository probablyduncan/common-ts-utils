export function reduceToObject<T, V>(arr: T[], getKey: (item: T) => string, getValue: (item: T) => V): Record<string, V> {
    return arr.reduce((prev, curr) => Object.assign(prev, { [getKey(curr)]: getValue(curr) }), {} as Record<string, V>);
}