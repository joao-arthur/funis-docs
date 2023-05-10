# lt

```ts
const lt: <T>(val2: T) => (val1: T) => boolean;
```

Returns a function that compares val1 < val2.

## Example

```ts
callbacks.lt(2)(1) // true
```

```ts
callbacks.lt(1)(1) // false
```
