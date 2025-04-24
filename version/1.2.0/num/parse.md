# num.parse

```ts
type parseOptions = {
    readonly prefix: string;
} | {
    readonly suffix: string;
} | {
    readonly prefix: string;
    readonly suffix: string;
};

function parse(num: string, options: parseOptions): number | undefined;
```

**Try to parse** a number by the given prefix and suffix. If the prefix or
suffix doesn't match the passed value, returns _undefined_.

## Example

```ts
num.parse(
    "I see penguins",
    { prefix: "I see ", suffix: "penguins" },
); // undefined
num.parse("US$4", { prefix: "R$" }); // undefined
num.parse("4px", { suffix: "rem" }); // undefined
```

```ts
num.parse("$100.00", { prefix: "$" }); // 100.00
num.parse(
    "width: 100px",
    { prefix: "width: ", suffix: "px" },
); // 100
```
