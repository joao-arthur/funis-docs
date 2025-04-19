# kebabCase

```ts
function kebabCase(str: string): string
```

Transforms a sequence of words into kebab case.

## Example

```ts
str.kebabCase('hey') // 'hey'
str.kebabCase('j S o N') // 'j-s-o-n'
str.kebabCase('j_S_o_N') // 'j-s-o-n'
str.kebabCase('j-S-o-N') // 'j-s-o-n'
```
