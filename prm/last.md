# last

```ts
function last<const T>(promises: readonly Promise<T>[]): Promise<T>
```

Returns the last promise to resolve/reject.

::: warning
This function sets a _then_ and _catch_ callback for every passed promise.

This way, the only promise you can _then_ or _catch_ is the one returned by this function.
:::

## Example

```ts
await prm.last([
    prm.rejectTimeout('Socrates', 50),
    prm.resolveTimeout('Plato', 100),
    prm.resolveTimeout('Aristotle', 200),
]) // 'Aristotle'
```
