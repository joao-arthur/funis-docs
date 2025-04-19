# throttle

```ts
function throttle(
    cb: () => void,
    timeout: number
): () => number
```

Returns a function that executes the callback after the timeout. The returned value is the timeout id.

Whenever the returned function is called during the timeout period, the function call is ignored.

## Example

```ts
const strArr: string[] = [];
chr.throttle(() => strArr.push('Salvator mundi'), 0)();
// after 5 ms
strArr // ['Salvator mundi']
```

```ts
const strArr: string[] = [];
const returnedFn = chr.throttle(() => strArr.push('Salvator mundi'), 5);
returnedFn();
returnedFn();
returnedFn();
// after 10 ms
strArr // ['Salvator mundi']
```
