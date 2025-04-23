# cb.eq

```ts
const eq: <T>(val2: T) => (val1: T) => boolean;
```

Returns a function that compares **val1 === val2**.

## Example

```ts
cb.eq(1)(1); // true
cb.eq(2)(2); // true
```
