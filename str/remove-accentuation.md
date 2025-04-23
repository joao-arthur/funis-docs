# removeAccentuation

```ts
function removeAccentuation(str: string): string;
```

Remove accentuated characters.

## Example

```ts
str.removeAccentuation("loção"); // loo
str.removeAccentuation("fianceé"); // fiance
str.removeAccentuation("Äpfel"); // pfel
str.removeAccentuation("këndon"); // kndon
str.removeAccentuation("pálmafák"); // plmafk
```
