# map.entries

```ts
function entries<K, V>(
    map: Map<K, V>,
): readonly (readonly [K, V])[];
```

Returns the **entries** of the _Map_ instance.

## Example

```ts
map.entries(new Map()); // []
```

```ts
map.entries(
    new Map([
        [1, { name: "Paul McCartney" }],
        [2, { name: "George Harrison" }],
    ]),
); /* [
    [1, { name: 'Paul McCartney' }],
    [2, { name: 'George Harrison' }],
] */
```
