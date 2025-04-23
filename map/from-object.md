# fromObject

```ts
function fromObject<const T>(obj: plainObject<T>): Map<string | number, T>;
```

Returns a Map instance with the same key-value pairs of the passed object.

## Example

```ts
map.fromObject({}); // Map { }
```

```ts
map.fromObject({
    Paul: "Bass",
    John: "Guitar",
    George: "Guitar",
    Ringo: "Drums",
}); /* Map {
    Paul -> 'Bass',
    John -> 'Guitar',
    George -> 'Guitar',
    Ringo -> 'Drums',
} */
```
