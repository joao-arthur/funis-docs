# map.fromObject

```ts
function fromObject<const T>(obj: plainObject<T>): Map<string | number, T>;
```

Returns a _Map_ instance with the same entries of the passed _object_.

## Example

```ts
map.fromObject({}); // _Map_ { }
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
