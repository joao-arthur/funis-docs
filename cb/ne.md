# ne

```ts
const ne: <T>(val2: T) => (val1: T) => boolean
```

Returns a function that compares val1 !== val2.

## Example

```ts
cb.ne(1)(2) // true
```

```ts
cb.ne(2)(1) // true
```
