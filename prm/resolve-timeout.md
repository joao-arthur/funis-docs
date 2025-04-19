# resolveTimeout

```ts
function resolveTimeout<const T>(
    valueToResolve: T,
    timeout: number
): Promise<T>
```

Returns a promise that resolves after the timeout.

## Example

```ts
await prm.resolveTimeout(
    'Hello, promise!',
    500
) // 'Hello, promise!'
```
