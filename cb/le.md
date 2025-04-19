# le

```ts
const le: <T>(val2: T) => (val1: T) => boolean
```

Returns a function that compares val1 <= val2.

## Example

```ts
cb.le(2)(1) // true
```

```ts
cb.le(1)(1) // true
```
