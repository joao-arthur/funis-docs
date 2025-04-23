# pick

```ts
function pick<const T>(
    obj: plainObject<T>,
    keys: readonly string[],
): plainObject<T>;
```

Creates an object with only the passed keys.

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
