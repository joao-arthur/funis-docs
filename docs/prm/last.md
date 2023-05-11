# last

```ts
function last<const T>(promises: readonly Promise<T>[]): Promise<T>
```

Returns the last promise to resolve/reject.

::: warning
This function sets a *then* and *catch* callback for every passed promise.

This way, the only promise you can *then* or *catch* is the one returned by this function.
:::

## Example

```ts
await prm.last([
    prm.rejectTimeout('Socrates', 50),
    prm.resolveTimeout('Plato', 100),
    prm.resolveTimeout('Aristotle', 200),
]) // 'Aristotle'
```
