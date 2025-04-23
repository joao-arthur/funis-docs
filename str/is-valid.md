# isValid

```ts
function isValid(str: string | undefined | null): boolean;
```

Returns false for _undefined_ and _null_. Returns true otherwise.

## Example

```ts
str.isValid(undefined); // false
str.isValid(null); // false
```

```ts
str.isValid(""); // true
str.isValid(" "); // true
str.isValid("Lorem ipsum"); // true
```
