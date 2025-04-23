# str.pascalCase

```ts
function pascalCase(str: string): string;
```

Transforms a sequence of words into **pascal case**.

## Example

```ts
str.pascalCase("hey"); // 'Hey'
str.pascalCase("j S o N"); // 'JSON'
str.pascalCase("j_S_o_N"); // 'JSON'
str.pascalCase("j-S-o-N"); // 'JSON'
```
