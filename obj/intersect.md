# obj.intersect

```ts
function intersect(
    objs: readonly plainObject[],
): plainObject;
```

Returns a new _object_ with the entries which the key are **in every object**.

## Example

```ts
obj.intersect([
    { name: "Cliff Burton", band: "Metallica", country: "US" },
    { name: "James Hetfield", band: "Metallica", country: "US" },
    { name: "Kirk Hammett", band: "Metallica", country: "US" },
]); // { band: 'Metallica', country: 'US' }
```
