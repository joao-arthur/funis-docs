# arr.repeat

```ts
repeat<const T>(arr: readonly T[], times: number): readonly T[]
```

Returns a new _array_ with the all the items **repeated** the specified **number
of times**.

## Example

```ts
arr.repeat([0, 1, 2], 0); // []
arr.repeat([0, 1, 2], 1); // [0, 1, 2]
arr.repeat([0, 1, 2], 2); // [0, 1, 2, 0, 1, 2]
```
