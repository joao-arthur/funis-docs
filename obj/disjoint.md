# obj.disjoint

```ts
function disjoint(
    objs: readonly plainObject[],
): plainObject;
```

Returns a new _object_ with the entries which the key is **unique to every
object**.

## Example

```ts
obj.disjoint([
    { name: "Steve Harris", country: "UK" },
    { name: "Megadeth", foundation: 1983 },
]); // { country: 'UK', foundation: 1983 }
```
