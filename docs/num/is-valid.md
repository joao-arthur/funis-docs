# isValid

```ts
function isValid(num: number | undefined | null): boolean
```

Returns false for *undefined*, *null* and *NaN*. Returns true otherwise.

## Example

```ts
num.isValid(undefined) // false
num.isValid(null) // false
num.isValid(NaN) // false
```

```ts
num.isValid(0) // true
num.isValid(1) // true
num.isValid(Infinity) // true
```
