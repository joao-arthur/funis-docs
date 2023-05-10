# ge

```ts
const ge: <T>(val2: T) => (val1: T) => boolean;
```

Returns a function that compares val1 >= val2.

## Example

```ts
callbacks.ge(1)(2) // true
```

```ts
callbacks.ge(1)(1) // true
```
