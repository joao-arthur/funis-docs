# arr.unique

```ts
function unique<const T>(arr: readonly T[]): readonly T[];
```

Returns a new _array_ **without duplicated** values.

## Example

```ts
arr.unique([1, 1, "john", "john"]); // [1, 'john']
arr.unique([42]); // [42]
```
