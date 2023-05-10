# normalizeZero

```ts
function normalizeZero(num: number): number
```

If the passed value is -0, returns 0. Returns the passed value otherwise.

## Example

 ```ts
 numbers.normalizeZero(-0) // 0
 numbers.normalizeZero(0) // 0
 ```
