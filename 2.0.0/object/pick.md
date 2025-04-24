# obj.pick

```ts
function pick<const T>(
    obj: plainObject<T>,
    keys: readonly string[],
): plainObject<T>;
```

Returns a new _object_ with the entries whose key matches the passed keys.

## Example

```ts
obj.pick(
    { animal: "dog", species: "Canis lupus", age: 5 },
    [],
); // { }
```

```ts
obj.pick(
    { animal: "dog", species: "Canis lupus", age: 5 },
    ["animal"],
); // { animal: 'dog' }
```
