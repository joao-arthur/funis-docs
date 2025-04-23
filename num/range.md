# num.range

```ts
function range(
    from: number,
    to: number,
    step?: number = 1,
): readonly number[];
```

Returns a **range** from a number to another, respecting the **step** between
each value.

## Example

```ts
num.range(2, -1); // []
num.range(-1, 2, -1); // []
```

```ts
num.range(-1, 2); // [-1, 0, 1, 2]
num.range(4, 5.1); // [4, 5]
num.range(2, -1, -1); // [2, 1, 0, -1]
num.range(10.2, 9, -0.2); // [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]
```
