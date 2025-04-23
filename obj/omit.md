# obj.omit

```ts
function omit<const T>(
    obj: plainObject<T>,
    keys: readonly string[],
): plainObject<T>;
```

Returns a new _object_ without the entries whose key matches the passed keys.

## Example

```ts
obj.omit(
    { animal: "dog", species: "Canis lupus", age: 5 },
    [],
); // { animal: 'dog', species: 'Canis lupus', age: 5 }
```

```ts
obj.omit(
    { animal: "dog", species: "Canis lupus", age: 5 },
    ["animal"],
); // { species: 'Canis lupus', age: 5 }
```
