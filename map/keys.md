# map.keys

```ts
function keys<K, V>(map: Map<K, V>): readonly K[];
```

Returns the **keys** of the _Map_ instance entries.

## Example

```ts
map.keys(new Map()); // []
```

```ts
map.keys(
    new Map([
        [1, { name: "Paul McCartney" }],
        [2, { name: "George Harrison" }],
    ]),
); // [1, 2]
```
