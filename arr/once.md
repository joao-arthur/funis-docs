# once

```ts
function once<const T>(
    arr: readonly T[],
    cb: (
        item: T,
        index: number,
        arr: readonly T[]
    ) => boolean
): boolean
```

Returns true if the callback returns true once. Returns false otherwise.

## Example

```ts
arr.once(
    ['Axl', 'Slash', 'Duff', 'Buckethead'],
    item => item === 'Roses'
) // false
arr.once(
    ['Axl', 'Slash', 'Duff', 'Buckethead'],
    item => item === 'Buckethead'
) // true
arr.once(
    ['Axl', 'Slash', 'Duff', 'Buckethead'],
    item => item.length > 2
) // false
```
