# intersect

```ts
function intersect<const T>(
    arrs: readonly (readonly T[])[]
): readonly T[]
```

Returns an array with the items that appear in every array.

## Example

```ts
arr.intersect([[false, true], []]) // []
arr.intersect([[1, 2, 3], [4, 5, 6]]) // []
```

```ts
arr.intersect([['']]) // ['']
arr.intersect([[4, 5, 6], [5, 6, 7]]) // [5, 6]
arr.intersect([
    ['George', 'Paul', 'John', 'Ringo', 'Ringo'],
    ['Ringo'],
    ['Ringo', 'John'],
]) // ['Ringo']
```
