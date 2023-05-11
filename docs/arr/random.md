# random

```ts
random<const T>(arr: readonly T[]): T | undefined
```

Returns a random character of the array.

## Example

```ts
arr.random([]) // undefined
```

```ts
arr.random([true]) // [true]
arr.random(false, 0, 'n') // false | 0 | 'n'
```
