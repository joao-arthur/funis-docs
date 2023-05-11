# first

```ts
function first<const T>(arr: readonly T[]): T | undefined
```

Returns the first item of the array.

## Example

```ts
arr.first([]) // undefined
arr.first([4, 5, 6]) // 4
```
