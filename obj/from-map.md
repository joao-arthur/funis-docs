# fromMap

```ts
function fromMap<const T>(
    map: Map<string | number, T>,
): plainObject<T>;
```

Returns an object with the same key-value pairs of the passed Map instance.

## Example

```ts
obj.fromMap(new Map([])); // { }
```

```ts
obj.fromMap(
    new Map([
        ["Paul", "Bass"],
        ["John", "Guitar"],
        ["George", "Guitar"],
        ["Ringo", "Drums"],
    ]),
); /* {
    Paul: 'Bass',
    John: 'Guitar',
    George: 'Guitar',
    Ringo: 'Drums',
}*/
```
