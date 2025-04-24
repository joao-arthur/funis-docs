# arr.disjoint

```ts
function disjoint<const T>(
    arrs: readonly (readonly T[])[],
): readonly T[];
```

Returns a new _array_ with the items that are **unique to every array**.

## Example

```ts
arr.disjoint([[1, 2, 3], [1, 2, 3]]); // []
```

```ts
arr.disjoint([[1]]); // [1]
arr.disjoint([[false, true], []]); // [false, true]
arr.disjoint([[4, 5, 6], [5, 6, 7]]); // [4, 7]
arr.disjoint([
    ["George", "Paul", "John", "Ringo", "George"],
    ["Ringo"],
    ["John"],
]); // ['George', 'Paul']
```
