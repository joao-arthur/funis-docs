# debounce

```ts
function debounce(
    cb: () => void,
    timeout: number
): () => number
```

Returns a function that executes the callback after the timeout. The returned value is the timeout id.

Whenever the returned function is called during the timeout period, the timeout resets.

## Example

```ts
const strArr: string[] = [];
const returnedFn = chr.debounce(() => strArr.push('Salvator mundi'), 1);
returnedFn();
// after 5 ms
returnedFn();
// after 5 ms
strArr // ['Salvator mundi', 'Salvator mundi']
```

```ts
const strArr: string[] = [];
const returnedFn = chr.debounce(() => strArr.push('Salvator mundi'), 30);
returnedFn();
// after 10 ms
returnedFn();
// after 10 ms
returnedFn();
// after 10 ms
returnedFn();
// after 10 ms
strArr // []
```
