# obj.fromMap

```ts
function fromMap<const T>(
    map: Map<string | number, T>,
): plainObject<T>;
```

Returns an _object_ with the same entries of the passed _Map_ instance.

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
