# camelCase

```ts
function camelCase(str: string): string
```

Transforms a sequence of words into camel case.

## Example

```ts
str.camelCase('hey') // 'hey'
str.camelCase('j S o N') // 'jSON'
str.camelCase('j_S_o_N') // 'jSON'
str.camelCase('j-S-o-N') // 'jSON'
```
