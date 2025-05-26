/**
 * Converts an array of objects to a record of those objects, with the key and value determined by given key/value functions.
 * @param arr array of T
 * @param getKey function to get key of return object for each T
 * @param getValue function to get V value of return object for each T
 * @returns an object with keys from getKey corresponding to each item in the original array.
 */
export function reduceToObject<T, V>(arr: T[], getKey: (item: T) => string, getValue: (item: T) => V): Record<string, V> {
    return arr.reduce((prev, curr) => Object.assign(prev, { [getKey(curr)]: getValue(curr) }), {} as Record<string, V>);
}

/**
 * Converts an object of key/value pairs to an array of the object's values, with the key optionally included in the value object.
 * @param obj an object to convert to an array
 * @param keyPropName if supplied, will be the name of the prop that the key from the original array will be returned as
 * @returns an array of objects from the obj, with the key included if keyPropName was provided
 */
export function reduceToArray<V, K extends string | undefined = undefined>(
    obj: Record<string, V>,
    keyPropName?: K
): Array<
    K extends string
        ? V & { [P in K]: string }
        : V
> {
    return Object.keys(obj).map(key => {
        let item: any = obj[key];
        if (keyPropName !== undefined) {
            item[keyPropName] = key;
        }
        return item;
    });
}