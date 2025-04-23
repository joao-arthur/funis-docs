# cb.gt

```ts
const gt: <T>(val2: T) => (val1: T) => boolean;
```

Returns a function that compares **val1 > val2**.

## Example

```ts
cb.gt(1)(2); // true
cb.gt(1)(1); // false
```
