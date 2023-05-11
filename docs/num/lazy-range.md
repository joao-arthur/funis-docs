# lazyRange

```ts
function lazyRange(
    from: number,
    to: number,
    step?: number = 1
): IterableIterator<number>
```

Returns an iterable range from a number to another, respecting the step between each value.

## Example

```ts
num.lazyRange(2, -1) // []
num.lazyRange(-1, 2, -1) // []
```

```ts
num.lazyRange(-1, 2) // [-1, 0, 1, 2]
num.lazyRange(4, 5.1) // [4, 5]
num.lazyRange(2, -1, -1) // [2, 1, 0, -1]
num.lazyRange(10.2, 9, -0.2) // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
```
