# str.replaceAccentuation

```ts
function replaceAccentuation(str: string): string;
```

Replace accentuated characters by unaccentuated ones.

## Example

```ts
str.replaceAccentuation("loção"); // locao
str.replaceAccentuation("fianceé"); // fiancee
str.replaceAccentuation("Äpfel"); // Apfel
str.replaceAccentuation("këndon"); // kendon
str.replaceAccentuation("pálmafák"); // palmafak
```
