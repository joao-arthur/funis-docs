# cb.lt

```ts
const lt: <T>(val2: T) => (val1: T) => boolean;
```

Returns a function that compares **val1 < val2**.

## Example

```ts
cb.lt(2)(1); // true
cb.lt(1)(1); // false
```
