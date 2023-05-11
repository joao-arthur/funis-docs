# last

```ts
function last<const T>(arr: readonly T[]): T | undefined
```

Returns the last item of the array. If the array is empty, returns *undefined*.

## Example

```ts
arr.last([]) // undefined
arr.last([4, 5, 6]) // 6
```
