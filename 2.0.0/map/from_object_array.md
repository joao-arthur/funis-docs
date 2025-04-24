# map.fromObjectArray

```ts
function fromObjectArray<const T, const Id extends keyof T>(
    items: readonly T[],
    prop: Id,
): Map<Id, T>;
```

Returns a _Map_ instance with the items, using the passed prop of the _objects_
as keys.

## Example

```ts
map.fromObjectArray([], "id"); // _Map_ { }
```

```ts
map.fromObjectArray(
    [
        { name: "Alex Lifeson", instrument: "Guitar" },
        { name: "Geddy Lee", instrument: "Bass" },
        { name: "Neil Peart", instrument: "Drums" },
    ],
    "instrument",
); /* Map {
    Guitar -> { name: "Alex Lifeson", instrument: "Guitar" },
    Bass -> { name: "Geddy Lee", instrument: "Bass" },
    Drums -> { name: "Neil Peart", instrument: "Drums" },
} */
```
