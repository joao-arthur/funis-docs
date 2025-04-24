# prm.objectify

```ts
type returnType<V, E> = {
    readonly value: V;
    readonly error: undefined;
    readonly type: "resolved";
} | {
    readonly value: undefined;
    readonly error: E;
    readonly type: "rejected";
};

function objectify<V, E>(
    promise: Promise<V>,
): Promise<returnType<V, E>>;
```

Returns a _object_ with **value and error** entries corrensponding to resolved
or rejected value of the promise.

## Example

```ts
await prm.objectify(
    Promise.resolve(undefined),
); // { value: undefined, error: undefined, type: 'resolved' }
await prm.objectify(
    Promise.resolve("Symbolic acts"),
); // { value: 'Symbolic acts', error: undefined, type: 'resolved' }
```

```ts
await prm.objectify(
    Promise.reject(undefined),
); // { value: undefined, error: undefined, type: 'rejected' }
await prm.objectify(
    Promise.reject("So vivid"),
); // { value: undefined, error: 'So vivid', type: 'rejected' }
```
