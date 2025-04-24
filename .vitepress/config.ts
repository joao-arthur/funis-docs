import { defineConfig } from "vitepress";

export default defineConfig({
    title: "funis",
    base: "/funis",
    description: "A VitePress Site",
    themeConfig: {
        sidebar: [
            {
                text: "versions",
                items: [
                    {
                        text: "2.0.0",
                        collapsed: false,
                        items: [
                            {
                                text: "arr",
                                items: [
                                    { text: "unique", link: "/arr/unique" },
                                    { text: "once", link: "/arr/once" },
                                    { text: "disjoint", link: "/arr/disjoint" },
                                    {
                                        text: "intersect",
                                        link: "/arr/intersect",
                                    },
                                    {
                                        text: "groupToEntries",
                                        link: "/arr/group-to-entries",
                                    },
                                    {
                                        text: "groupToArray",
                                        link: "/arr/group-to-array",
                                    },
                                    {
                                        text: "groupToMap",
                                        link: "/arr/group-to-map",
                                    },
                                    {
                                        text: "groupToObject",
                                        link: "/arr/group-to-object",
                                    },
                                    {
                                        text: "combinate",
                                        link: "/arr/combinate",
                                    },
                                    { text: "random", link: "/arr/random" },
                                    { text: "repeat", link: "/arr/repeat" },
                                ],
                            },
                            {
                                text: "cb",
                                items: [
                                    { text: "eq", link: "/cb/eq" },
                                    { text: "ne", link: "/cb/ne" },
                                    { text: "gt", link: "/cb/gt" },
                                    { text: "ge", link: "/cb/ge" },
                                    { text: "lt", link: "/cb/lt" },
                                    { text: "le", link: "/cb/le" },
                                ],
                            },
                            {
                                text: "chr",
                                items: [
                                    { text: "debounce", link: "/chr/debounce" },
                                    { text: "throttle", link: "/chr/throttle" },
                                ],
                            },
                            {
                                text: "map",
                                items: [
                                    {
                                        text: "mapEntries",
                                        link: "/map/map-entries",
                                    },
                                    { text: "mapKeys", link: "/map/map-keys" },
                                    {
                                        text: "mapValues",
                                        link: "/map/map-values",
                                    },
                                    { text: "entries", link: "/map/entries" },
                                    { text: "keys", link: "/map/keys" },
                                    { text: "values", link: "/map/values" },
                                    {
                                        text: "fromObject",
                                        link: "/map/from-object",
                                    },
                                    {
                                        text: "fromObjectArray",
                                        link: "/map/from-object-array",
                                    },
                                ],
                            },
                            {
                                text: "num",
                                items: [
                                    { text: "clamp", link: "/num/clamp" },
                                    { text: "parse", link: "/num/parse" },
                                    { text: "range", link: "/num/range" },
                                    {
                                        text: "lazyRange",
                                        link: "/num/lazy-range",
                                    },
                                    { text: "isValid", link: "/num/is-valid" },
                                    { text: "random", link: "/num/random" },
                                    {
                                        text: "compareAsc",
                                        link: "/num/compare-asc",
                                    },
                                    {
                                        text: "compareDesc",
                                        link: "/num/compare-desc",
                                    },
                                    {
                                        text: "normalizeZero",
                                        link: "/num/normalize-zero",
                                    },
                                    { text: "toFixed", link: "/num/to-fixed" },
                                ],
                            },
                            {
                                text: "obj",
                                items: [
                                    {
                                        text: "mapEntries",
                                        link: "/obj/map-entries",
                                    },
                                    { text: "mapKeys", link: "/obj/map-keys" },
                                    {
                                        text: "mapValues",
                                        link: "/obj/map-values",
                                    },
                                    {
                                        text: "serialize",
                                        link: "/obj/serialize",
                                    },
                                    {
                                        text: "serializesToSame",
                                        link: "/obj/serializes-to-same",
                                    },
                                    { text: "fromMap", link: "/obj/from-map" },
                                    { text: "pick", link: "/obj/pick" },
                                    { text: "omit", link: "/obj/omit" },
                                    { text: "disjoint", link: "/obj/disjoint" },
                                    {
                                        text: "intersect",
                                        link: "/obj/intersect",
                                    },
                                ],
                            },
                            {
                                text: "prm",
                                items: [
                                    { text: "last", link: "/prm/last" },
                                    {
                                        text: "resolveTimeout",
                                        link: "/prm/resolve-timeout",
                                    },
                                    {
                                        text: "rejectTimeout",
                                        link: "/prm/reject-timeout",
                                    },
                                    {
                                        text: "objectify",
                                        link: "/prm/objectify",
                                    },
                                    { text: "retry", link: "/prm/retry" },
                                ],
                            },
                            {
                                text: "std",
                                items: [
                                    { text: "compose", link: "/std/compose" },
                                    { text: "pipe", link: "/std/pipe" },
                                    { text: "self", link: "/std/self" },
                                ],
                            },
                            {
                                text: "str",
                                items: [
                                    {
                                        text: "camelCase",
                                        link: "/str/camel-case",
                                    },
                                    {
                                        text: "pascalCase",
                                        link: "/str/pascal-case",
                                    },
                                    {
                                        text: "kebabCase",
                                        link: "/str/kebab-case",
                                    },
                                    {
                                        text: "snakeCase",
                                        link: "/str/snake-case",
                                    },
                                    {
                                        text: "replaceAccentuation",
                                        link: "/str/replace-accentuation",
                                    },
                                    {
                                        text: "removeAccentuation",
                                        link: "/str/remove-accentuation",
                                    },
                                    { text: "isValid", link: "/str/is-valid" },
                                    { text: "random", link: "/str/random" },
                                    {
                                        text: "compareAsc",
                                        link: "/str/compare-asc",
                                    },
                                    {
                                        text: "compareDesc",
                                        link: "/str/compare-desc",
                                    },
                                ],
                            },
                            {
                                text: "types",
                                items: [
                                    {
                                        text: "plainObject",
                                        link: "/types/plain-object",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: "1.2.0",
                        collapsed: true,
                        items: [
                            {
                                text: "arr",
                                items: [
                                    {
                                        text: "unique",
                                        link: "/version/1.2.0/arr/unique",
                                    },
                                    {
                                        text: "once",
                                        link: "/version/1.2.0/arr/once",
                                    },
                                    {
                                        text: "disjoint",
                                        link: "/version/1.2.0/arr/disjoint",
                                    },
                                    {
                                        text: "intersect",
                                        link: "/version/1.2.0/arr/intersect",
                                    },
                                    {
                                        text: "groupToEntries",
                                        link:
                                            "/version/1.2.0/arr/group-to-entries",
                                    },
                                    {
                                        text: "groupToArray",
                                        link:
                                            "/version/1.2.0/arr/group-to-array",
                                    },
                                    {
                                        text: "groupToMap",
                                        link: "/version/1.2.0/arr/group-to-map",
                                    },
                                    {
                                        text: "groupToObject",
                                        link:
                                            "/version/1.2.0/arr/group-to-object",
                                    },
                                    {
                                        text: "combinate",
                                        link: "/version/1.2.0/arr/combinate",
                                    },
                                    {
                                        text: "random",
                                        link: "/version/1.2.0/arr/random",
                                    },
                                    {
                                        text: "repeat",
                                        link: "/version/1.2.0/arr/repeat",
                                    },
                                ],
                            },
                            {
                                text: "cb",
                                items: [
                                    {
                                        text: "eq",
                                        link: "/version/1.2.0/cb/eq",
                                    },
                                    {
                                        text: "ne",
                                        link: "/version/1.2.0/cb/ne",
                                    },
                                    {
                                        text: "gt",
                                        link: "/version/1.2.0/cb/gt",
                                    },
                                    {
                                        text: "ge",
                                        link: "/version/1.2.0/cb/ge",
                                    },
                                    {
                                        text: "lt",
                                        link: "/version/1.2.0/cb/lt",
                                    },
                                    {
                                        text: "le",
                                        link: "/version/1.2.0/cb/le",
                                    },
                                ],
                            },
                            {
                                text: "chr",
                                items: [
                                    {
                                        text: "debounce",
                                        link: "/version/1.2.0/chr/debounce",
                                    },
                                    {
                                        text: "throttle",
                                        link: "/version/1.2.0/chr/throttle",
                                    },
                                ],
                            },
                            {
                                text: "map",
                                items: [
                                    {
                                        text: "mapEntries",
                                        link: "/version/1.2.0/map/map-entries",
                                    },
                                    {
                                        text: "mapKeys",
                                        link: "/version/1.2.0/map/map-keys",
                                    },
                                    {
                                        text: "mapValues",
                                        link: "/version/1.2.0/map/map-values",
                                    },
                                    {
                                        text: "entries",
                                        link: "/version/1.2.0/map/entries",
                                    },
                                    {
                                        text: "keys",
                                        link: "/version/1.2.0/map/keys",
                                    },
                                    {
                                        text: "values",
                                        link: "/version/1.2.0/map/values",
                                    },
                                    {
                                        text: "fromObject",
                                        link: "/version/1.2.0/map/from-object",
                                    },
                                    {
                                        text: "fromObjectArray",
                                        link:
                                            "/version/1.2.0/map/from-object-array",
                                    },
                                ],
                            },
                            {
                                text: "num",
                                items: [
                                    {
                                        text: "clamp",
                                        link: "/version/1.2.0/num/clamp",
                                    },
                                    {
                                        text: "parse",
                                        link: "/version/1.2.0/num/parse",
                                    },
                                    {
                                        text: "range",
                                        link: "/version/1.2.0/num/range",
                                    },
                                    {
                                        text: "lazyRange",
                                        link: "/version/1.2.0/num/lazy-range",
                                    },
                                    {
                                        text: "isValid",
                                        link: "/version/1.2.0/num/is-valid",
                                    },
                                    {
                                        text: "random",
                                        link: "/version/1.2.0/num/random",
                                    },
                                    {
                                        text: "compareAsc",
                                        link: "/version/1.2.0/num/compare-asc",
                                    },
                                    {
                                        text: "compareDesc",
                                        link: "/version/1.2.0/num/compare-desc",
                                    },
                                    {
                                        text: "normalizeZero",
                                        link:
                                            "/version/1.2.0/num/normalize-zero",
                                    },
                                    {
                                        text: "toFixed",
                                        link: "/version/1.2.0/num/to-fixed",
                                    },
                                ],
                            },
                            {
                                text: "obj",
                                items: [
                                    {
                                        text: "mapEntries",
                                        link: "/version/1.2.0/obj/map-entries",
                                    },
                                    {
                                        text: "mapKeys",
                                        link: "/version/1.2.0/obj/map-keys",
                                    },
                                    {
                                        text: "mapValues",
                                        link: "/version/1.2.0/obj/map-values",
                                    },
                                    {
                                        text: "serialize",
                                        link: "/version/1.2.0/obj/serialize",
                                    },
                                    {
                                        text: "serializesToSame",
                                        link:
                                            "/version/1.2.0/obj/serializes-to-same",
                                    },
                                    {
                                        text: "fromMap",
                                        link: "/version/1.2.0/obj/from-map",
                                    },
                                    {
                                        text: "pick",
                                        link: "/version/1.2.0/obj/pick",
                                    },
                                    {
                                        text: "omit",
                                        link: "/version/1.2.0/obj/omit",
                                    },
                                    {
                                        text: "disjoint",
                                        link: "/version/1.2.0/obj/disjoint",
                                    },
                                    {
                                        text: "intersect",
                                        link: "/version/1.2.0/obj/intersect",
                                    },
                                ],
                            },
                            {
                                text: "prm",
                                items: [
                                    {
                                        text: "last",
                                        link: "/version/1.2.0/prm/last",
                                    },
                                    {
                                        text: "resolveTimeout",
                                        link:
                                            "/version/1.2.0/prm/resolve-timeout",
                                    },
                                    {
                                        text: "rejectTimeout",
                                        link:
                                            "/version/1.2.0/prm/reject-timeout",
                                    },
                                    {
                                        text: "objectify",
                                        link: "/version/1.2.0/prm/objectify",
                                    },
                                    {
                                        text: "retry",
                                        link: "/version/1.2.0/prm/retry",
                                    },
                                ],
                            },
                            {
                                text: "std",
                                items: [
                                    {
                                        text: "compose",
                                        link: "/version/1.2.0/std/compose",
                                    },
                                    {
                                        text: "pipe",
                                        link: "/version/1.2.0/std/pipe",
                                    },
                                    {
                                        text: "self",
                                        link: "/version/1.2.0/std/self",
                                    },
                                ],
                            },
                            {
                                text: "str",
                                items: [
                                    {
                                        text: "camelCase",
                                        link: "/version/1.2.0/str/camel-case",
                                    },
                                    {
                                        text: "pascalCase",
                                        link: "/version/1.2.0/str/pascal-case",
                                    },
                                    {
                                        text: "kebabCase",
                                        link: "/version/1.2.0/str/kebab-case",
                                    },
                                    {
                                        text: "snakeCase",
                                        link: "/version/1.2.0/str/snake-case",
                                    },
                                    {
                                        text: "replaceAccentuation",
                                        link:
                                            "/version/1.2.0/str/replace-accentuation",
                                    },
                                    {
                                        text: "removeAccentuation",
                                        link:
                                            "/version/1.2.0/str/remove-accentuation",
                                    },
                                    {
                                        text: "isValid",
                                        link: "/version/1.2.0/str/is-valid",
                                    },
                                    {
                                        text: "random",
                                        link: "/version/1.2.0/str/random",
                                    },
                                    {
                                        text: "compareAsc",
                                        link: "/version/1.2.0/str/compare-asc",
                                    },
                                    {
                                        text: "compareDesc",
                                        link: "/version/1.2.0/str/compare-desc",
                                    },
                                ],
                            },
                            {
                                text: "types",
                                items: [
                                    {
                                        text: "plainObject",
                                        link:
                                            "/version/1.2.0/types/plain-object",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                text: "changelog",
                items: [
                    { text: "v1.1.0", link: "/changelog/v1.1.0" },
                    { text: "v1.1.1", link: "/changelog/v1.1.1" },
                    { text: "v1.2.0", link: "/changelog/v1.2.0" },
                ],
            },
        ],
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/joao-arthur/funis-deno",
            },
            {
                icon: "github",
                link: "https://github.com/joao-arthur/funis-node",
            },
        ],
    },
});
